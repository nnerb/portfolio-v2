
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='h-300px w-full py-8 bg-blue-900'>
        <div className='flex items-center flex-col justify-around gap-2 md:flex-row'>
          <div className='flex gap-1'> 
            <span className='text-white'>Develop by</span>
            <span className='text-blue-500 font-[900]'>Brenn Aldwin Santiago</span>
            </div>
          <h1 className='text-white'>© {currentYear} All rights reserved. </h1>
        </div>  
    </footer>
  )
}

export default Footer