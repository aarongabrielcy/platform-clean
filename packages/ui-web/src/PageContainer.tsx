import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

/** Contenedor responsivo estándar del contenido de páginas */
export default function PageContainer({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] ${className}`}>
      {children}
    </div>
    /*<div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 border border-blue-400 ${className}`}>
      {children}
    </div>*/
    
  );
}
