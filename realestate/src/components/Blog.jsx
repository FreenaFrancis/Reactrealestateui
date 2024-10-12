import React from 'react';
import lap1 from '/src/assets/lap1.png';
import lap2 from '/src/assets/lap2.png';

function Blog() {

  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: lap1
    },
    {
      id: 2,
      title: "What are your safeguarding responsibilities and how can you manage them?",
      image: lap2
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: lap2
    },
  ];

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGray font-semibold mb-4'>
          Caring is the new marketing
        </h2>
        <p className='md:w-3/4 text-sm text-neutralGray mb-8 mx-auto'>
          The Nextcent blog is the best place to read about the latest membership insights, trends, and more. See who's joining the community, 
          read about how our community is increasing their membership income, and more.
        </p>
      </div>

      {/* Blog posts */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-12'>
        {blogs.map(blog => (
          <div key={blog.id} className='relative mb-16 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105'>
            <div className='w-full h-56 overflow-hidden'>
              <img src={blog.image} alt={blog.title} className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110' />
            </div>
            <div className='text-center px-6 py-8'>
              <h4 className='mb-3 text-lg font-semibold text-neutralDGray'>{blog.title}</h4>
              <a href='/' className='inline-block font-bold text-brandPrimary hover:text-neutral-700'>
                Meet all customers
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
