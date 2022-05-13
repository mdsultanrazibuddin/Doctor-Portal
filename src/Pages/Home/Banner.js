import React from 'react';
import image from '../../assets/images/chair.png'
import MainButton from '../Shared/MainButton';
import bgImage from '../../assets/images/bg.png'


const Banner = () => {
    return (
        <div style={{
          background:`url(${bgImage})`,
          backgroundSize:`cover`
        }}>
            <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src= {image} 
    class="max-w-sm rounded-lg shadow-2xl pic" alt='' />
    <div className='text-area'>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quaerat laudantium quisquam. Iure corporis tempora excepturi numquam vero doloremque ut.</p>
      <MainButton>Get Started</MainButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;