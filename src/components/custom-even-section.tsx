import React from "react";

interface CustomEvenSectionProps {
  children: React.ReactNode;
  customClass?: string;
  id: string;
}

const CustomEvenSection: React.FC<CustomEvenSectionProps> = ({ 
  children, 
  customClass, 
  id 
}) => {
  return ( 
    <section className={`py-16 px-4 bg-slate-50 dark:bg-slate-950 ${customClass}`} id={id}>
      {children}
    </section>
   );
}
 
export default CustomEvenSection ;