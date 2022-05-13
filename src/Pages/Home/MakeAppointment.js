import React from 'react';
import image from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import MainButton from '../Shared/MainButton';

const MakeAppointment = () => {
    return (
        <section style ={{
            background:`url(${appointment})`
        }}
         className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={image} alt=""  />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, officia. Omnis nihil sapiente iure alias a consequatur nulla quae vel consequuntur magni! Nobis ad eos enim velit minima, iusto optio quae excepturi doloribus doloremque sit! Laboriosam enim id recusandae consequatur?</p>
               
               <MainButton/>
            </div>
            
        </section>
    );
};

export default MakeAppointment;