import React from 'react';
import emailjs from 'emailjs-com';
import git from '../../src/image/git.png'
import link from '../../src/image/link.png'

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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left border-b-2 border-success">
                        <h1 className="text-5xl font-bold text-success">Contact Me</h1>
                        <p className="py-6 text-2xl text-primary">Just leave me an email, I will get back to you as early as possible. Thank You!</p>
                        <div className='flex'>
                            <a href="https://github.com/zaras-dreamweb" target='_blank'><img src={git} alt="" /></a>
                            <a href="https://www.linkedin.com/in/sadia-johora-593611234/" target='_blank'><img src={link} alt="" /></a>

                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body border-2 border-accent">
                            <form onSubmit={sendEmail}>
                                <div className="form-control pb-2">
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control pb-2">
                                    <input type="text" name='user-email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control pb-2">
                                    <input type="text" name='subject' placeholder="Subject" className="input input-bordered" />
                                </div>
                                <div className="form-control pb-2">
                                    <textarea type="text" name='message' placeholder="Your Text" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary font-bold">Send</button>
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