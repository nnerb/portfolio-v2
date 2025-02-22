interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return ( 
    <div className="relative">
      <h1 
        className="
          text-[clamp(26px,5vw,32px)] font-gothic-bold pb-3
          after:content-[''] after:bg-blue-500 after:w-12 after:h-1 
          after:bottom-0 after:absolute after:left-1/2 after:-translate-x-1/2
        "
      >
        {title}
      </h1>
    </div>
  );
}
 
export default Header;