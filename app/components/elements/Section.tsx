import clsx from "clsx";

/**
 * Simple utility componont for creating a section.
 *
 * By default it wraps its heading and children in a [Tailwind Container](https://tailwindcss.com/docs/container)
 * which just puts a max-width and padding as defined in tailwind config.
 *
 * Containerized is useful to be false for things where you need full width, like a hero image or a background color. In these cases I would just use this utility but then pass
 * a container div as its first child.
 */
export function Section({
  as: Component = "section",
  containerized = true,
  children,
  className,
  divider = "none",
  display = "flex",
  heading,
  ...props
}: {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  divider?: "none" | "top" | "bottom" | "both";
  display?: "grid" | "flex";
  heading?: string;
  containerized?: boolean;
  [key: string]: any;
}) {
  const dividers = {
    none: "border-none",
    top: "border-t border-primary/05",
    bottom: "border-b border-primary/05",
    both: "border-y border-primary/05",
  };

  const displays = {
    flex: "flex",
    grid: "grid",
  };

  const sectionStyles = clsx(
    "w-full",
    dividers[divider],
    className,
    displays[display],
    containerized && "container"
  );

  return (
    <Component {...props} className={sectionStyles}>
      {heading && <h2 className="text-2xl lg:text-4xl font-bold">{heading}</h2>}
      {children}
    </Component>
  );
}
