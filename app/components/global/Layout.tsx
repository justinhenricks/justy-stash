import { Footer } from "./Footer";
import { Header } from "./Header";

export const menu = {
  items: [
    {
      id: 1,
      to: "#",
      target: "",
      title: "Home",
    },
    {
      id: 2,
      to: "#",
      target: "",
      title: "About",
    },
    {
      id: 3,
      to: "#",
      target: "",
      title: "Portfolio",
    },
    {
      id: 4,
      to: "#",
      target: "",
      title: "Contact",
    },
  ],
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
      <Header menu={menu} />

      <main role="main" id="mainContent" className="flex-grow flex flex-col">
        {children}
      </main>

      <Footer />
    </div>
  );
}
