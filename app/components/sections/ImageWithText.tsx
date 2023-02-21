import React from "react";

interface ImageWithTextProps {
  id: string;
  imgSrc: string;
  header: string;
  bgCls: string;
  children: React.ReactNode;
}

export const ImageWithText: React.FC<ImageWithTextProps> = ({
  imgSrc,
  header,
  bgCls,
  children,
  id,
}) => {
  return (
    <section id={id} className={`${bgCls} flex justify-center`}>
      <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center lg:p-16 p-4 gap-6 lg:gap-4 xl:gap-48">
        <img src={imgSrc} alt={header} className="w-full max-w-lg" />

        <div className="flex flex-col gap-3 flex-1 w-full md:items-center lg:p-6">
          <h3 className="text-3xl">{header}</h3>
          {children}
        </div>
      </div>
    </section>
  );
};
