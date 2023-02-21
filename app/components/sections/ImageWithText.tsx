import React from "react";
import { Section } from "~/components";

interface ImageWithTextProps {
  id: string;
  imgSrc: string;
  header: string;
  children: React.ReactNode;
}

export const ImageWithText: React.FC<ImageWithTextProps> = ({
  imgSrc,
  header,
  children,
  id,
}) => {
  return (
    <Section
      id={id}
      className={`flex flex-col lg:flex-row lg:items-center lg:justify-between justify-center my-8 gap-4 lg:gap-10`}
    >
      <img
        src={imgSrc}
        alt={header}
        className="w-full rounded-lg max-w-lg shadow-lg"
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl lg:text-4xl font-bold">{header}</h3>
        {children}
      </div>
    </Section>
  );
};
