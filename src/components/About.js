import React from 'react'
import { Typography } from '@material-ui/core'

const About = () => {

    const aboutText = 'My name is Michael Martino and I\'m a Web Developer.\
    My passion is programming, especially when creating new ways to make people\'s lives easier (be it with\
    websites or extensions), and I have pursued it as a new career for the past 18 months. I have been working with\
    the developers at iSentia to improve our main platform, Mediaportal, and was awarded iSentia\'s Q1 award for innovation\
    for my work.'
    const aboutTextPara2 = 'I have experience with JS and several popular JS libraries, including React and Node.\
    I also have experience with Typescript and Ruby.'

    return (
        <div className='portfolio-items-parent'>
            <Typography>{aboutText}</Typography>
            <br />
            <Typography>{aboutTextPara2}</Typography>
        </div>
    )
}

export default About