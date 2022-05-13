import React from 'react';
import image from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews =[
        {
            _id: 1,
            name:"Winso Herry",
            review:"",
            img: people1,
            location:"California"
        },
        {
            _id: 2,
            name:"Winso Herry",
            review:"",
            img: people2,
            location:"California"
        },
        {
            _id: 3,
            name:"Winso Herry",
            review:"",
            img: people3,
            location:"California"
        }
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">
                        Testimonials
                    </h4>
                    <h2 className='text-3xl'>Whats our Patients say</h2>
                </div>
                <div>
                     <img src={image} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review.id}
                    review ={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;