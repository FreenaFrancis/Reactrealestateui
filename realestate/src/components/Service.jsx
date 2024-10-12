import React from 'react';
import icon1 from '../assets/Icon.png';  // Importing images properly
import icon2 from '../assets/Icon (1).png';
import icon3 from '../assets/Icon (2).png';
import logo1 from '../assets/Logo.png';
import logo2 from '../assets/Logo (1).png';
import logo3 from '../assets/Logo (2).png';
import logo4 from '../assets/Logo (3).png';
import logo5 from '../assets/Logo (4).png';
import logo6 from '../assets/Logo (5).png';
import logo7 from '../assets/Logo (6).png';

function Service() {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description: "Our membership management software provides full automation of membership renewals and payments",
      image: icon1
    },
    {
      id: 2,
      title: "National Associations",
      description: "Our membership management software provides full automation of membership renewals and payments",
      image: icon2
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description: "Our membership management software provides full automation of membership renewals and payments",
      image: icon3
    },
  ];

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
      {/* Section title */}
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGray'>We have been working with some of the fortune 500+ clients</p>

        {/* Company logos */}
        <div className='flex my-12 flex-wrap justify-between items-center gap-8'>
          <img src={logo1} alt='Logo 1' />
          <img src={logo2} alt='Logo 2' />
          <img src={logo3} alt='Logo 3' />
          <img src={logo4} alt='Logo 4' />
          <img src={logo5} alt='Logo 5' />
          <img src={logo6} alt='Logo 6' />
          <img src={logo7} alt='Logo 7' />
        </div>
      </div>

      {/* Section subtitle */}
      <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Manage your entire community</h2>
        <p className='text-neutralGray'>Who is Realcent suitable for?</p>
      </div>

      {/* Service cards */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
          services.map(service => (
            <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300'>
              <div>
                <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                  <img src={service.image} alt='' className='-ml-5' />
                </div>
                <h4 className='text-2xl font-bold text-neutralDGray mb-2 px-2'>{service.title}</h4>
                <p className='text-sm text-neutralDGray'>{service.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Service;
