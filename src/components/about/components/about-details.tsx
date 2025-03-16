import MoreInfo from "./more-info";

const AboutDetails = () => {
  return ( 
    <div className="relative flex flex-col gap-4">
      <p className='mb-2'>
        <strong className='text-blue-500'>Hello! </strong>
          My name is 
        <strong className='text-blue-500'> Brenn Aldwin A. Santiago</strong>
        . I specialize in
        <strong className='text-blue-500'> building refined digital web experiences </strong>
          with a
        <strong className='text-blue-500'> focus </strong> 
        on 
        <strong className='text-blue-500'> responsive </strong>
        and 
        <strong className='text-blue-500'> interactive content. </strong>
      </p>
      <p className="mb-2 dark:text-slate-200">
        I hold a
        <strong className='text-blue-500'> bachelor's degree in Computer Science </strong> 
        in
        <strong className='text-blue-500'> Cavite State University </strong> 
        and am currently seeking opportunities to 
        <strong className='text-blue-500'> advance my career in Web Development</strong> 
        .
      </p>
      <MoreInfo />
    </div>
   );
}
 
export default AboutDetails;