import React, { Component } from 'react';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import hero from '../public/images/hero.png';
import about from '../public/images/about.png';
import d1 from '../public/images/design/1.png';
import g1 from '../public/images/figmaGallery/1.png';
import g2 from '../public/images/figmaGallery/2.png';
import g3 from '../public/images/figmaGallery/3.png';
import g4 from '../public/images/figmaGallery/4.png';
import g5 from '../public/images/figmaGallery/5.png';
import g6 from '../public/images/figmaGallery/6.png';
import g7 from '../public/images/figmaGallery/7.png';
import g8 from '../public/images/figmaGallery/8.png';
import g9 from '../public/images/figmaGallery/9.png';
import coach from '../public/images/coach.png';

export default class singlePage extends Component {
    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="contents">
                        <header className="header">
                            <div className="container">
                                <div className="main-header">
                                    <a href="#" className="brand-logo">
                                        <Image src={logo} alt="logo" />
                                        <div className="brand-logo-name">
                                            Yoga <span>In.</span>
                                        </div>
                                    </a>
                                    <nav className="main-nav">
                                        <ul>
                                            <li>
                                                <a className="active" href="#Home">
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#About">About</a>
                                            </li>
                                            <li>
                                                <a href="#Gallery">Gallery</a>
                                            </li>
                                            <li>
                                                <a href="#Contacts">Contacts</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="circle-1" />
                                <div className="circle-2" />
                            </div>
                        </header>
                        <section className="hero">
                            <div className="container">
                                <div className="main-hero" id="Home">
                                    <div className="text">
                                        <p>
                                            You <span className="orange">can’t</span> control what goes <br />
                                            on outside, but you <span className="yellow">can</span> control{" "}
                                            <br />
                                            what goes on inside.
                                        </p>
                                        <a href="#Contacts" className="btn">
                                            Join Us
                                        </a>
                                    </div>
                                    <div className="lady-yoga">
                                        <Image src={hero} alt="hero" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="about" id="About">
                            <div className="container">
                                <div className="main-about">
                                    <div className="about-text">
                                        <h1>
                                            About <span>Us</span>
                                        </h1>
                                        <p>
                                            Yoga is a mind and body practice with a 5,000- <br />
                                            year history in ancient Indian philosophy. Various <br />
                                            styles of yoga combine physical postures, breathing <br />
                                            techniques, and meditation or relaxation.
                                        </p>
                                    </div>
                                    <div className="about-image">
                                        <Image src={about} alt="about" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-about">
                                <Image src={d1} alt="1" />
                            </div>
                        </section>
                        <section className="gallery" id="Gallery">
                            <div className="container">
                                <h1>
                                    Our <span className="orange">Gallery</span>{" "}
                                </h1>
                                <div className="main-gallery">
                                    <div className="image-wrapper">
                                        <Image src={g1} alt="1" />
                                    </div>
                                    <div className="image-wrapper">
                                        <Image src={g2} alt="2" />
                                    </div>
                                    <div className="image-wrapper">
                                        <Image src={g3} alt="3" />
                                    </div>
                                    <div className="image-wrapper">
                                        <Image src={g4} alt="4" />
                                    </div>
                                    <div className="image-wrapper">
                                        <Image src={g5} alt="5" />
                                    </div>
                                    <div className="image-wrapper">
                                        <Image src={g6} alt="6" />
                                    </div>
                                    <div className="image-wrapper">
                                        <Image src={g7} alt="7" />
                                    </div>
                                    <div className="image-wrapper">
                                        <Image src={g8} alt="8" />
                                    </div>
                                    <div className="image-wrapper">
                                        <Image src={g9} alt="9" />
                                    </div>
                                </div>
                                <div className="circle-gallery" />
                            </div>
                        </section>
                        <section className="coach">
                            <div className="container">
                                <div className="main-coach">
                                    <div className="image-coach">
                                        <Image src={coach} alt="coach" />
                                    </div>
                                    <div className="description">
                                        <h1>
                                            Meet our <span className="orange">Trainer</span>
                                        </h1>
                                        Karen started practising yoga in the 1980s. At <br /> the time she had
                                        a stressful job in the fashion <br />
                                        industry and was looking for something to <br /> help me ‘unwind’. I
                                        have heard it said many times that yoga is <br /> as much about
                                        ‘undoing’ as it is about ‘doing’ <br /> and I can certainly relate to
                                        that! I was like a <br /> tightly coiled spring and little by little
                                        yoga <br /> worked it’s magic on me. .
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="contacts" id="Contacts">
                            <div className="container">
                                <div className="main-contacts">
                                    <h1 className="contacts-text">
                                        Don't be Strangers <br />{" "}
                                        <span className="orange">Just say Hello.</span>
                                    </h1>
                                    <form action className="contacts-form">
                                        <div className="box">
                                            <label htmlFor>Name</label>
                                            <input type="text" />
                                        </div>
                                        <div className="box">
                                            <label htmlFor>Email</label>
                                            <input type="text" />
                                        </div>
                                        <div className="box">
                                            <label htmlFor>Address</label>
                                            <input type="text" />
                                        </div>
                                        <div className="box">
                                            <button type="submit" className="btn">
                                                Join Us
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
                </div>
             );
    }
}
