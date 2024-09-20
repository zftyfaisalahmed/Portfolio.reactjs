import React from 'react'

const Service = () => {
  return (
    <section className="services" id="services">
        <h2 className="heading">My <span>Services</span></h2>

        <div className="services-container">
            <div className="services-box">
                <i className='bi bi-code-slash'></i>
                <h3>Certifications</h3>
                <p>JavaScript Basics, Intermediate and problem solving – HackerRank</p>
                <p>Web Development (MERN Full Stack) – Be-practical Tech Solutions</p>
            </div>
            <div className="services-box">
                <i className='bi bi-globe2'></i>
                <h3>Internship Experience</h3>
                <p>TechnoFly Solutions Labs</p>
                <p>Worked on Embedded Systems & IoT, gaining experience in developing smart devices and systems integration.</p>
            </div>
            <div className="services-box">
                <i className='bi bi-bar-chart-fill'></i>
                <h3>Verbal Jobs</h3>
                <p>HannahTech Pvt Lmt Company - I worked as Internship</p>
                <p>PLM Engineer Teamcenter modules and BMIDE Tools with the virtualbox Machine</p>
            </div>
        </div>
    </section>
  )
}

export default Service