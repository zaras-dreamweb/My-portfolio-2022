import img from '../../image/test.png'
import Project from '../Project';
import Contact from '../Contact';
import AboutMe from '../AboutMe';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';




const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200 mt-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="avatar online">
                        <div className="w-full rounded-full">
                            <img className='mb-10' style={{ height: '400px' }} src={img} alt='' />
                        </div>
                    </div>
                    <div className='mb-12'>
                        <h1 data-aos="fade-up"
                            data-aos-duration="30000"
                            data-aos-delay="800"
                            className="text-5xl font-bold text-success uppercase text-center"> Sadia <span className='text-white'>Tuz</span> Johora</h1>
                        <p data-aos="fade-left"
                            data-aos-duration="50000"
                            data-aos-delay="900"
                            className="py-6 text-xl uppercase text-accent text-center">A junior web developer</p>
                        <div data-aos="fade-down"
                            data-aos-duration="50000"
                            data-aos-delay="500"
                            className='text-center'>
                            <div className='text-center'>
                                <ExternalLink href="https://drive.google.com/uc?id=1OOtkAb9QgKfT3ljb6r3ZpeK3IIYHZoJ6&export=download">
                                    <span className='btn btn-xs btn-success font font-extrabold' >Download Resume</span>
                                </ExternalLink>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fde047" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <AboutMe></AboutMe>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;