import React, { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('Skills');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    
    <section className="about" id="about">
      <div className="about-content">
        <div className="row">
          <div className="design-col-1">
            <div className="square"></div>
          </div>
          <div className="design-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              I hold a Bachelor's degree in Computer Science and Engineering from Raghu Institute of Technology,
              Visakhapatnam, graduated in 2025. With a solid foundation in both web development and back-end development, 
              I have contributed to various projects that highlight my technical skills, creative problem-solving, 
              and practical experience with Google Cloud Platform (GCP).
              Throughout my academic journey, I have been an active participant in hackathons, workshops, 
              and the National Service Scheme (NSS), as well as a member of IEEE. 
              These experiences have helped me develop strong teamwork and leadership abilities while expanding my expertise in scalable cloud solutions.
              I am now seeking an opportunity to join an organization where I can apply my skills—including GCP, 
              web, and back-end development—contribute to impactful projects, 
              and grow professionally alongside the team.
            </p>

            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('Skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('Education')}
              >
                Education
              </p>
            </div>

            <div className={`tab-contents ${activeTab === 'Skills' ? 'active-tab' : ''}`} id="Skill">
              <ul>
                <li><span>Front-End Devlopment</span><br />Html,Css, Java Script & React JS</li>
                <li><span>Back-End Devlopment</span><br/>C, Python, Django, MongoDB, MySQL</li>
                <li><span>Cloud Technology</span><br />Google Cloud Platform</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
              <ul>
                <li><span>High school</span><br />Vignan High School(10th - APSSC 2019)<br/>NRI Junior College(12th(MPC) - APBIE 2021)</li>
                <li><span><a href="https://drive.google.com/drive/folders/1E8TNWEdmR6ISMF5UmP4FD_x6cg_CXCRl?usp=sharing">(Btech)</a></span><br />Raghu Institute of Technology(Computer Science & Engineering(2021-2025))</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;