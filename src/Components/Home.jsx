import React from 'react'
import CV from "../public/Faisal_Ahmed_CV.pdf"

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>Faisal Ahmed</h1>
        <p>
        I am a passionate Web Developer with a background in Electronics and Communication Engineering. I specialize in building functional and visually appealing websites using modern web technologies. My strong foundation in JavaScript, React, Bootstrap, Fontawesome, Node, Mongodb, Express (MERN Full Stack Developer) allows me to create dynamic user experiences. In addition, I enjoy working on projects that bridge the gap between software and hardware, bringing innovative ideas to life.
        </p>
        <p className='home-p'>
        Bachelor of Engineering (B.E.) in Electronics and Communication
        ACS College of Engineering, Bengaluru (2019-2023)
        CGPA: 6.7
        </p>
        <div className='social-media'>
          <a href="https://wa.me/9108968419" target='_blank' rel='noreferrer'><i className='bi bi-whatsapp'></i></a>
          <a href="https://x.com/aaravchoudary" target='_blank' rel='noreferrer'><i className='bi bi-twitter'></i></a>
          <a href="https://www.instagram.com/zfty_faisalahmed/" target='_blank' rel='noreferrer'><i className='bi bi-instagram'></i></a>
          <a href="https://www.linkedin.com/in/faisal-ahmed-ab18b3285/" target='_blank' rel='noreferrer'><i className='bi bi-linkedin'></i></a>
        </div>
        <a href={CV} className='button' download="Faisal_Ahmed_CV.pdf">Download CV</a>
      </div>
      <div className="profession-container">
          <div className="profession-box">
              <div className="profession" style={{"--i":"0"}}>
                  <i className='bi bi-code-slash'></i>
                  <h3>Mongo</h3>
              </div>
              <div className="profession" style={{"--i":"1"}}>
                  <i className='bi bi-camera'></i>
                  <h3>Express</h3>
              </div>
              <div className="profession" style={{"--i":"2"}}>
                  <i className='bi bi-palette'></i>
                  <h3>React Js</h3>
              </div>
              <div className="profession" style={{"--i":"3"}}>
                  <i className='bi bi-camera-video'></i>
                  <h3>Node Js</h3>
              </div>

              <div className="circle"></div>
          </div>

          <div className="overlay"></div>
      </div>
      <div className="home-img">
          {/* <img src="" alt="" /> */}
      </div>
    </section>
  )
}

export default Home