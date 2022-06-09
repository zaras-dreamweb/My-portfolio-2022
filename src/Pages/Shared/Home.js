import { Animator, batch, Fade, FadeIn, Move, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn } from 'react-scroll-motion';
import img from '../../image/test.png'
import { ExternalLink } from 'react-external-link';
import Project from '../Project';
import Contact from '../Contact';


const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const fix = batch(Sticky(), Fade());
const FadeUp = batch(Fade(), Move(), Sticky());

const Home = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="avatar online">
                        <div className="w-full rounded-full">
                            <img style={{ height: '400px' }} src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-success uppercase"> Sadia Tuz Johora!</h1>
                        <p className="py-6 uppercase text-primary">A junior web developer</p>
                        <div>
                            <ExternalLink href="https://drive.google.com/file/d/1OOtkAb9QgKfT3ljb6r3ZpeK3IIYHZoJ6/view?usp=sharing">
                                <span className='btn btn-success' >Resume</span>
                            </ExternalLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h2 className='text-5xl text-success font-bold pb-5'>About Me</h2>
                        <p className='text-accent'>Hi! I am Sadia Tuz Johora. I live in the Unites States of America.</p>
                        <p className="py-6 text-primary">Thinking of starting a career in Web Development was not an easy decision.
                            The path I took to become a Junior Web Developer was extremely thrilling and exciting for me.
                            I took a 180-degree turn from my educational background and started this journey.</p>
                        <p className='text-success'>  Currently, I am looking for opportunities to further my knowledge in this field.
                            As I have made so far and have acquired knowledge of basic web development,
                            I strongly believe I will be able to secure my career as a Web Developer soon.</p>
                    </div>
                </div>
            </div>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;