interface LeftHeaderProps {
  title: string;
}

const LeftHeader: React.FC<LeftHeaderProps> = ({ title }) => {
  return ( 
    <h1 
      className="
        text-[clamp(26px,5vw,32px)] flex items-center gap-8 w-full relative font-gothic-bold whitespace-nowrap 
        after:content-[''] after:block after:relative after:w-[300px] after:h-[1px] after:bg-slate-900 
        dark:after:bg-slate-200 
      "
    >
      {title}
    </h1>
   );
}
 
export default LeftHeader;