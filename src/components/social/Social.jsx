import React from 'react'
import "./Social.css"

const Social = () => {
    return(
        <div className='social'>
            <ul className='menu-social'>
                <li>
                    <a href='https://www.facebook.com/erick.veliz.16144/' target={"_blank"} rel={"noreferrer"}>
                        <img src="https://i.ibb.co/Hx1svRr/facebook.png" alt="facebook" border="0" className='facebook'/>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/its.veliz/' target={"_blank"} rel={"noreferrer"}>
                        <img src="https://i.ibb.co/dLTbQyD/instagram.png" alt="instagram" border="0" className='instagram'/>
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com/erve_pud' target={"_blank"} rel={"noreferrer"}>
                        <img src="https://i.ibb.co/YtBNsGq/twitter.png" alt="twitter" border="0" className='twitter'/>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/erick-veliz-5a40331b9/' target={"_blank"} rel={"noreferrer"}>
                        <img src="https://i.ibb.co/GV2NcsR/linkedin.png" alt="linkedin" border="0" className='linkedin'/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/EriVelk' target={"_blank"} rel={"noreferrer"}>
                        <img src="https://i.ibb.co/mbTSH9H/github.png" alt="github" border="0" className='github'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social