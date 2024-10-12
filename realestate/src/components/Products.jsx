import React from 'react'
import pana from '../assets/pana.png'
// import audi from '../assets/audi.png'
import logo2 from '../assets/Logo (1).png';
import logo3 from '../assets/Logo (2).png';
import logo4 from '../assets/Logo (3).png';
import logo5 from '../assets/Logo (4).png';
import logo6 from '../assets/Logo (5).png';
import logo7 from '../assets/Logo (6).png';
import audi from '../assets/audi.png'
function Products() {
  return (
    <div>
    {/* about img */}
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
      <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-12'>
        
        {/* Updated image container to make it larger and clearer */}
        <div className='md:w-1/2'>
          {/* Added object-fit and quality-related styling */}
          <img src={pana} alt='' className=' h-auto md:h-[400px] object-cover' />
        </div>

        <div className='md:w-3/5 mx-auto'>
          <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5'>
            The Unseen of Spending Three Years at Pixelgrade
          </h2>
          <p className='md:w-3/4 text-sm text-neutralDGray mb-8'>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
             massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. 
             In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
              In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
               commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis 
               
               libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <button className='btn-primary'>Learn More</button>
        </div>
      </div>
    </div>

    {/* company status */}
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSliver'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-1/3'>
   <img src={audi} alt='' className=' h-auto md:h-[400px] object-cover'/>
        </div>
{/* stats */}
     <div className='md:w-2/3 mx-auto'>
        <div>
            <p className='md:w-4/5 text-sm text-neutralGray mb-8 leading-7'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
        <p className='text-base text-neutralGray mb-8'>British Dragon Boat Racing Association</p>
        
        <div>
            <div className='flex items-center flex-wrap gap-8'>

           
        <img src={logo2} alt='Logo 2' />
          <img src={logo3} alt='Logo 3' />
          <img src={logo4} alt='Logo 4' />
          <img src={logo5} alt='Logo 5' />
          <img src={logo6} alt='Logo 6' />
          <img src={logo7} alt='Logo 7' />

          <div className='flex items-center gap-8'>
            <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customer
            {/* <i className="fa-sharp fa-light fa-arrow-right"></i> */}
            {/* <FontAwesomeIcon icon="fa-sharp fa-light fa-arrow-right" /> */}
            </a>
          </div>
        </div>
        </div>
        </div>
        </div> 
      </div>
    </div>
  </div>
  )
}

export default Products