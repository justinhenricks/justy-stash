import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const d = new Date();
  return (
    <footer className="bg-dark text-light flex justify-center items-center py-4">
      &copy; Justin Henricks - {d.getFullYear()}
    </footer>
  );
};
