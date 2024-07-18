import React from 'react';
import '../styles/card.css';

const Card = (props) => {
  const { name, position, aboutMe, profilePage, linkedIn, github, resumeLink, profileImage } = props
  console.log(resumeLink)

  return (
    <>
      <div className='card-container'>

        {/* Text Area */}
        <div className="description">
          <h1>{name}</h1>
          <h2>{position}</h2>
          <p>{aboutMe}</p>
          <div className="icons">

            <a href={profilePage} className="hover-text" target="_blank">
              <span className="tooltip-text" id="fade">
                Profile Page
              </span>
              <i className="bi bi-globe"></i>
            </a>


            <a href={linkedIn} className="hover-text" target="_blank">
              <span className="tooltip-text" id="fade">
                LinkedIn
              </span>
              <i className="bi bi-linkedin"></i>
            </a>

            <a href={github} className="hover-text" target="_blank">
              <span className="tooltip-text" id="fade">GitHub</span>
              <i className="bi bi-github"></i>
            </a>

            <a href={resumeLink} className="hover-text" target="_blank" rel="noopener noreferrer">
              <span className="tooltip-text" id="fade">Resume</span>
              <i className="bi bi-file-earmark-arrow-down"></i>
            </a>

          </div>
        </div>

        {/* Image Area */}
        <div className="image">
          <img src={profileImage} alt={`${name}'s profile`} />
        </div>

      </div>
    </>
  );
};

export default Card;
