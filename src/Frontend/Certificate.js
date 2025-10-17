import React, { useState } from "react";
import full from "./image/full.jpeg";
import AWS from "./image/AWS.png";
import STC from "./image/STC.png";
import REACT from "./image/REACT.jpeg";
import WAB from "./image/WAB.jpeg";
import "./Certificate.css";

function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => setSelectedImage(img);
  const closeImage = () => setSelectedImage(null);

  return (
    <>
      <h1>Certificates:</h1><br />

      {/* Full Stack Internship */}
      <div className="certificate-card" onClick={() => openImage(full)}>
        <div className="certificate-img">
          <img src={full} alt="Full Stack Internship" />
        </div>
        <div className="centener">
          <h1>Full Stack Developer</h1>
          <p>
            Completed a 6-month internship at Gradtwin Services (OPC) Pvt. Ltd. in the Python Domain
            (Sept 2024 – Feb 2025) as part of my B.E. Computer Science degree at PSN College of Engineering & Technology.
            Recognized as a self-motivated, hard-working, and dedicated team member with Par Excellence performance.
          </p>
        </div>
      </div><br />

      {/* AWS Certificate */}
      <div className="certificate-card" onClick={() => openImage(AWS)}>
        <div className="certificate-img">
          <img src={AWS} alt="AWS Academy Certificate" />
        </div>
        <div className="centener">
          <h1>AWS Academy Graduate – Cloud Architecting</h1>
          <p>
            Successfully completed the AWS Academy Cloud Architecting course (60 hours) issued by AWS Academy on September 24, 2024.
            Gained hands-on knowledge in designing, deploying, and managing cloud-based solutions using AWS services and architecture best practices.
          </p>
        </div>
      </div><br />

      {/* HTML Training Certificate */}
      <div className="certificate-card" onClick={() => openImage(STC)}>
        <div className="certificate-img">
          <img src={STC} alt="HTML Training Certificate" />
        </div>
        <div className="centener">
          <h1>HTML Student Training Programme – IIT Bombay</h1>
          <p>
            Participated in a 1-week Student Training Programme on HTML from June 6, 2024 to June 12, 2024,
            organized by PSN College of Engineering and Technology in collaboration with the Spoken Tutorial Project, IIT Bombay.
            Gained foundational knowledge of HTML structure, tags, and best practices for building web pages.
          </p>
        </div>
      </div><br></br>

      {/* Wab Developer certificate */}
      <div className="certificate-card" onClick={() => openImage(WAB)}>
        <div className="certificate-img">
          <img src={WAB} alt="Wab Developer Certificate" />
        </div>
        <div className="centener">
          <h1>Web Development Internship – Iconix Software Solution, Tirunelveli</h1>
          <p>Successfully completed a hands-on internship from September 4 to September 16, 2023, focusing on web development concepts and practical projects. Enhanced skills in building and deploying websites, working with modern technologies, and applying industry best practices under professional guidance.</p>
        </div>
      </div><br></br>

      {/*React js certificate */}
      <div className="certificate-card" onClick={() => openImage(REACT)}>
        <div className="certificate-img">
          <img src={REACT} alt="React.js Certificate" />
        </div>
        <div className="centener">
          <h1>React.js Technical & Employability Skills Training – PSN College of Engineering and Technology</h1>
          <p>Completed an intensive training program on React.js along with employability skills from July 15 to August 9, 2024. The program covered building dynamic user interfaces, state management, and integrating APIs, along with professional skills for workplace readiness.</p>
        </div>
      </div>


      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <span className="close">&times;</span>
          <img src={selectedImage} alt="Full view" className="modal-content" />
        </div>
      )}
    </>
  );
}

export default Certificate;
