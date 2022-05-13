import React from 'react';
import image from '../../assets/images/treatment.png'
import MainButton from '../Shared/MainButton';

const Banner2 = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row ">
    <img src={image}class="max-w-sm rounded-lg shadow-2xl" alt = '' />
    <div >
      <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <MainButton/>
    </div>
  </div>
</div>
    );
};

export default Banner2;