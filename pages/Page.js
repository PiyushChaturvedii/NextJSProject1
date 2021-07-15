import React, { Component } from 'react';
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
                                        <img src="images/logo.png" alt />
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
                                        <img src="images/hero.png" alt />
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
                                            styles ofyogacombinephysical postures, breathing <br />
                                            techniques, and meditation or relaxation.
                                        </p>
                                    </div>
                                    <div className="about-img">
                                        <img src="images/about.png" alt />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-about">
                                <img src="images/design/1.png" alt />
                            </div>
                        </section>
                        <section className="gallery" id="Gallery">
                            <div className="container">
                                <h1>
                                    Our <span className="orange">Gallery</span>{" "}
                                </h1>
                                <div className="main-gallery">
                                    <div className="image-wrapper">
                                        <img src="images/figmaGallery/1.png" alt />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/figmaGallery/2.png" alt />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/figmaGallery/3.png" alt />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/figmaGallery/4.png" alt />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/figmaGallery/5.png" alt />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/figmaGallery/6.png" alt />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/figmaGallery/7.png" alt />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/figmaGallery/8.png" alt />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src="images/figmaGallery/9.png" alt />
                                    </div>
                                </div>
                                <div className="circle-gallery" />
                            </div>
                        </section>
                        <section className="coach">
                            <div className="container">
                                <div className="main-coach">
                                    <div className="img-coach">
                                        <img src="images/coach.png" alt />
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
