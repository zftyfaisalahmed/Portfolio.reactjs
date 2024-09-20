import React from 'react'
import vdo1 from "../public/vedio1.mp4"
import vdo2 from "../public/vedio2.mp4"
import vdo3 from "../public/vedio3.mp4"
import vdo4 from "../public/vedio4.mp4"
import vdo5 from "../public/vedio5.mp4"

const Port = () => {
  return (
    <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Project</span></h2>

        <div className="portfolio-container">
            <div className="portfolio-box">
                <video src={vdo1} autoPlay loop></video>

                <div className="portfolio-layer">
                    <h4>Doctor Consultancy</h4>
                    <p>Full MERN stack application to manage doctor appointments and consultations.</p>
                    <a href="https://github.com/zftyfaisalahmed/patient-consultancy"><i className='bi bi-box-arrow-up-right' value=""></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <video src={vdo2} autoPlay loop></video>

                <div className="portfolio-layer">
                    <h4>crud-server-validation</h4>
                    <p>Frontend used as React js to validate to the CRUD operation</p>
                    <a href="https://github.com/zftyfaisalahmed/REACT/tree/main/class12-crud-server-validation"><i className='bi bi-box-arrow-up-right'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <video src={vdo3} autoPlay loop></video>

                <div className="portfolio-layer">
                    <h4>React-operator</h4>
                    <p>A website that performs various operations like arithmetic and logical tasks.</p>
                    <a href="https://github.com/zftyfaisalahmed/Operators"><i className='bi bi-box-arrow-up-right'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
            <video src={vdo4} autoPlay loop></video>

                <div className="portfolio-layer">
                    <h4>File-Read</h4>
                    <p>Mern Full stack which is Read the file and we can add our own files to view in documenet</p>
                    <a href="https://github.com/zftyfaisalahmed/node_express_auth"><i className='bi bi-box-arrow-up-right'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
            <video src={vdo5} autoPlay loop muted></video>

                <div className="portfolio-layer">
                    <h4>Mini-Spotify</h4>
                    <p>Music application in which Spotify Developer token has used every 24 hours</p>
                    <a href="https://github.com/zftyfaisalahmed/REACT/tree/main/class9"><i className='bi bi-box-arrow-up-right'></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Port