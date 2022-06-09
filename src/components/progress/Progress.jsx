import './Progress.css'
import React from 'react'

const Progress = () => {
    return (
        <div className="p">
            <div className='p-left'>
                <h3>Skills</h3>
            </div>
            <div className='p-right'>
                <div className='p-item'>
                <p>JAVA</p>
                    <progress id="file" max="100" value="90"> 90% </progress>
                </div>
                <p>JavaScript</p>
                <div className='p-item'>
                    <progress id="file" max="100" value="80"> 80% </progress>
                </div>
                <div className='p-item'>
                <p>NodeJS</p>
                    <progress id="file" max="100" value="75"> 75% </progress>
                </div>
                <div className='p-item'>
                <p>MySQL</p>
                    <progress id="file" max="100" value="80"> 80% </progress>
                </div>
                <div className='p-item'>
                <p>MongoDB</p>
                    <progress id="file" max="100" value="70"> 70% </progress>
                </div>
            </div>
        </div>
    )
}

export default Progress