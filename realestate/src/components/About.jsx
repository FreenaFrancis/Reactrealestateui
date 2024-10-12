import React from 'react';
import Frames from '../assets/Group.png';

function About() {
  return (
    <div>
      {/* about img */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'  id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-12'>
          
          {/* Updated image container to make it larger and clearer */}
          <div className='md:w-1/2'>
            {/* Added object-fit and quality-related styling */}
            <img src={Frames} alt='' className=' h-auto md:h-[400px] object-cover' />
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
          <div className='md:w-1/2'>
          <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3'>
             Helping a local <br></br>
             <span className='text-brandPrimary'> 
businedd reivent itself
             </span>
            </h2>
            <p className='md:w-3/4 text-sm text-neutralDGray mb-8'>
            We reached here with our hard work and dedication
             
            </p>
          </div>
{/* stats */}
          <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img src='/src/assets/avatar.png' alt=''></img>
                <div>
                  <h4 className='text-2xl text-neutralDGray font-semibold'>2,245,341</h4>
                <p>Members</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <img src='/src/assets/point.png' alt=''></img>
                <div>
                  <h4 className='text-2xl text-neutralDGray font-semibold'>2,245,341</h4>
                <p>Bookings</p>
                </div>
              </div>

            </div>

            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img src='/src/assets/hands.png' alt=''></img>
                <div>
                  <h4 className='text-2xl text-neutralDGray font-semibold'>68,245,341</h4>
                <p>Clubs</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <img src='/src/assets/box.png' alt=''></img>
                <div>
                  <h4 className='text-2xl text-neutralDGray font-semibold'>5,765,341</h4>
                <p>paymentss</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
