import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_yb0496f',
            'template_tj1w78x',
            event.target,
            'aA9Iena2agPFRFgeD'
        )
            .then(res => {
                console.log(res);
                alert('email sent')
            }).catch(err => console.log(err));
        event.target.reset();
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold text-success">Contact Me</h1>
                        <p class="py-6 text-2xl text-primary">Just leave me an email, I will reach back to you as early as possible. Thank You!</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body border-2 border-accent">
                            <form onSubmit={sendEmail}>
                                <div class="form-control pb-2">
                                    <input type="text" name='name' placeholder="Name" class="input input-bordered" />
                                </div>
                                <div class="form-control pb-2">
                                    <input type="text" name='user-email' placeholder="Email" class="input input-bordered" />
                                </div>
                                <div class="form-control pb-2">
                                    <input type="text" name='subject' placeholder="Subject" class="input input-bordered" />
                                </div>
                                <div class="form-control pb-2">
                                    <textarea type="text" name='message' placeholder="Your Text" class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-primary font-bold">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;