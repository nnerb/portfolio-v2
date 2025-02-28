import MoreInfo from "./more-info";

const AboutDetails = () => {
  return ( 
    <div className="relative flex flex-col gap-4 text-base before:content-['asd'] before:absolute before:-z-10 before:inset-0 before:bg-sky-900 before:blur-xl before:opacity-50 before:rounded-lg">
      <p className='mb-2'>
        <span className='text-blue-500 font-bold'>Hello! </span>
          My name is 
        <span className='text-blue-500 font-bold'> Brenn Aldwin A. Santiago</span>
        . I specialize in
        <span className='text-blue-500 font-bold'> building refined digital web experiences </span>
          with a
        <span className='text-blue-500 font-bold'> focus </span> 
        on 
        <span className='text-blue-500 font-bold'> responsive </span>
        and 
        <span className='text-blue-500 font-bold'> interactive content. </span>
      </p>
      <p className="mb-2 dark:text-slate-200">
        I hold a
        <span className='text-blue-500 font-bold'> bachelor's degree in Computer Science </span> 
        in
        <span className='text-blue-500 font-bold'> Cavite State University </span> 
        and am currently seeking opportunities to 
        <span className='text-blue-500 font-bold'> advance my career in Web Development</span> 
        .
      </p>
      <MoreInfo />
    </div>
   );
}
 
export default AboutDetails;