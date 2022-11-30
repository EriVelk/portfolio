import React from 'react'
import './About.css'
import Award from "../../img/mern.png";
import Spring from "../../img/spring-boot.png";
import Java from "../../img/java.png";

const About = () => {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src='https://okli.in/wp-content/uploads/2021/04/resticon-removebg-preview.png' alt='' className='a-img' />
                </div>
            </div>
            <div className='a-right'>
                <h1 className="a-title">API REST</h1>
                <p className="a-sub">
                    API REST consumption with retrofit for android studio and axios with react in web development.
                </p>
                <p className="a-desc">
                    I'm mainly a JAVA developer focused on the development of REST APIs with Spring Boot, I also have knowledge in JAVA 8, graphical interface with JAVA Swing.

                    I like to focus on WEB applications using MongoDB, React, NodeJS and Express NodeJS framework technologies.
                </p>
                <div className="a-award">
                    <img src={Java} alt="" className="a-award-img" />
                        <div className="a-award-texts">
                        <h4 className="a-award-title">JAVA Developer</h4>
                        <p className="a-award-desc">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                            and fugit.
                        </p>
                    </div>
                </div>
                <div className="a-award">
                    <img src={Spring} alt="" className="a-award-img" />
                        <div className="a-award-texts">
                        <h4 className="a-award-title">Spring Boot</h4>
                        <p className="a-award-desc">
                            REST API development with Spring boot
                        </p>
                    </div>
                </div>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                        <div className="a-award-texts">
                        <h4 className="a-award-title">MERN Developer</h4>
                        <p className="a-award-desc">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                            and fugit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About