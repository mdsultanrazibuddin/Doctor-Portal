import React from 'react';
import contact from '../../assets/images/appointment.png'
import MainButton from '../Shared/MainButton';

const Contact = () => {
    return (
        <section style={{
            background:`url(${contact})`
          }} className='text-center p-20'>
            
             <div>
                <h4 className="text-xl text-primary font-bold">
                        Contact Us
                </h4>
                 <h2 className='text-3xl text-white mt-2 '>Stay connected with us</h2>
             </div>
                
            
            <div className='mt-5'>
                <input type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs my-2" /> <br />
                <input type="text" placeholder="Subjects" class="input input-bordered w-full max-w-xs my-2" /> <br />
                <textarea class="textarea textarea-bordered w-full max-w-xs my-2 " placeholder="Bio"></textarea>
                <MainButton>Submit</MainButton>
            </div>
        </section>
    );
};

export default Contact;