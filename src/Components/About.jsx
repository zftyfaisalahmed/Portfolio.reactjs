import React from 'react'
import img1 from '../images/myself1.jpg';

const About = () => {
  return (
    <section className="about" id="about">
        <div className="about-img">
            <img src={img1} alt="" />
        </div>

        <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>
                Hi there, welcome to my website! I'm Faisal,
                a passionate web developer who enjoys learning new technologies
                and solving problems with code!
            </h3>
            <p>
                Tools: Git, Visual Studio Code.
            </p>
            <p>
                Thank you for visiting my website and getting to know me better. I hope you
                enjoyed reading my blog posts and
                found
                them useful and informative. If you want to read more of my posts, subscribe
                to my newsletter where I send
                weekly
                updates on web development trends and tips. If you have any feedback or
                suggestions, please let me know. I'd love to hear from you.
            </p>
            <a href="https://github.com/zftyfaisalahmed" className="button">GitHub</a>
        </div>
    </section>
  )
}

export default About