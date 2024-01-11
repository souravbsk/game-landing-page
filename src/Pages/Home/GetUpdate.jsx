import React from 'react';
import { FaTelegram, FaTwitter } from 'react-icons/fa';

const GetUpdate = () => {
    return (
        <section className='container'>
            <div className="max-w-full mb-16 md:-mb-36 relative z-20 bg-white lg:w-10/12 border shadow-xl rounded-3xl w-full md:w-10/12 px-3 md:px-0 mx-auto">
                <div className='text-center  gap-4 flex flex-col   px-0  md:px-20 lg:px-48 py-12 md:py-20 justify-center items-center'>
                    <h2 className='text-2xl md:text-3xl font-bold'>To Get Update New Games!</h2>
                    <p className='md:text-lg font-normal text-[#212529]'>Subscribe to get updated on future game releases</p>
                    
                        <form className=' rounded-full  overflow-hidden border-2 border-[#FF7825]  w-full'>
                            
                             <div className='relative'>
                             <input placeholder='Enter  Your Email' className='w-full text-xl bg-none outline-none h-full py-4 px-3 bg-[#EBE5FF]' type="email" name='email' id='email'  />
                                <button className='px-3 absolute top-1/2 -translate-y-1/2 right-2  py-3 rounded-full text-2xl bg-[#FF7825] text-white'><FaTelegram></FaTelegram></button>
                             </div>
                           
                        </form>
                    
                </div>
            </div>
        </section>
    );
};

export default GetUpdate;