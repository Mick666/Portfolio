import React from 'react'

const About = ({ page }) => {
    if (!page) return null

    const aboutText = 'My name is Michael Martino and I\'m a Web Developer.\
    My passion is programming, especially when creating new ways to make people\'s lives easier (be it with\
    websites or extensions), and I have pursued it as a new career for the past 18 months.\
    I have experience with JS and several popular JS libraries, including React and Node.\
    I also have experience with Typescript and Ruby.'

    return (
        <div>
            <p>{aboutText}</p>
        </div>
    )
}

export default About