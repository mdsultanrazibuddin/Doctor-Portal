import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <Banner2/>
            <MakeAppointment/>
            <Testimonials/>
        </div>
    );
};

export default Home;