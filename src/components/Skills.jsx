import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle1");
    circles.forEach((elem) => {
      const dots = elem.getAttribute("data-dots");
      const marked = elem.getAttribute("data-percent");
      const percent = Math.floor((dots * marked) / 100);
      const rotate = 360 / dots;
      let points = "";

      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
      }
      elem.innerHTML = points;
      
      const pointsMarked = elem.querySelectorAll(".points");
      for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
      }
    });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="main-text">
        <span>Technical and Professional</span>
        <h2>My Abilities</h2>
      </div>

      <div className="skill-main">
        <div className="skill-left">
          <h3>Technical Skills</h3>
          {/* Technical skills with progress bars */}
          <div className="skill-bar">
            <div className="info">
              <p>HTML</p>
              <p>95%</p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>CSS</p>
              <p>90%</p>
            </div>
            <div className="bar">
              <span className="css"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>JavaScript</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className="JavaScript"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>React JS</p>
              <p>60%</p>
            </div>
            <div className="bar">
              <span className="JavaScript"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>Python</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className="C"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>Django</p>
              <p>85%</p>
            </div>
            <div className="bar">
              <span className="Cplus"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>MySQL</p>
              <p>65%</p>
            </div>
            <div className="bar">
              <span className="MySQL"></span>
            </div>
          </div>
        </div>

        <div className="skill-right">
          <h3>Professional Skills</h3>
          <div className="Professional">
            <div className="box">
              <div className="circle1" data-dots="80" data-percent="90"></div>
              <div className="text">
                <h2>90%</h2>
                <small>Team Work</small>
              </div>
            </div>
            <div className="box">
              <div className="circle1" data-dots="80" data-percent="90"></div>
              <div className="text">
                <h2>80%</h2>
                <small>Creativity</small>
              </div>
            </div>
            <div className="box">
              <div className="circle1" data-dots="80" data-percent="90"></div>
              <div className="text">
                <h2>70%</h2>
                <small>Communication</small>
              </div>
            </div>
            <div className="box">
              <div className="circle1" data-dots="80" data-percent="90"></div>
              <div className="text">
                <h2>90% </h2>
                <small>Fast learner</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;