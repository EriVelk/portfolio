import React from 'react'
import './About.css'
import Award from "../../img/mern.png";

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
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