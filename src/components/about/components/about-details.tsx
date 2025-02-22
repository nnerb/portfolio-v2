import MoreInfo from "./more-info";

const AboutDetails = () => {
  return ( 
    <div className="flex flex-col gap-4 text-lg">
      <p className='mb-2'>
        <span className='text-blue-500 font-[600]'>Hello</span>
        ! My name is 
        <span className='text-blue-500 font-[600]'> Brenn Aldwin A. Santiago</span>
        . I specialize in
        <span className='text-blue-500 font-[600]'> building refined digital web experiences </span>
          with a
        <span className='text-blue-500 font-[600]'> focus </span> 
        on 
        <span className='text-blue-500 font-[600]'> responsive </span>
        and 
        <span className='text-blue-500 font-[600]'> interactive content. </span>
      </p>
      <p className="mb-2 dark:text-slate-200">
        I graduated with a 
        <span className='text-blue-500 font-[600]'> bachelor's degree in Computer Science </span> 
        at 
        <span className='text-blue-500 font-[600]'> Cavite State University. </span> 
        I am currently seeking opportunities to 
        <span className='text-blue-500 font-[600]'> further advance my career in Web Development</span> 
        .
      </p>
      <MoreInfo />
    </div>
   );
}
 
export default AboutDetails;