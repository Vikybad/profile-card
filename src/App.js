import React from 'react';
import Card from './components/Card';
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {

  const aboutMe = `Hi there! I'm Vikram, Skilled Software Developer with 2 years of experience. Proficient in Node.js, Express, Google Apps Script and various other
  technologies. Proven track record of successful feature development, bug fixes, and product enhancements to drive stability and improvements. Committed to writing clean,
  efficient code and delivering high quality solutions..\n\nLet's collaborate TOGETHER!`

  const linkedIn = "https://www.linkedin.com/in/vikrambadesara/"
  const profilePage = 'https://vikram-badesara.netlify.app/' // "https://main--vikrambadesara-softwaredeveloper.netlify.app/"
  const github = "https://github.com/vikyBad"
  const resumeLink = "/files/Vikram_Resume.pdf"
  const profileImageSrc = '/images/profile-pic.png'

  return (
    <>
      <SpeedInsights />
      <div className="container">
        <Card
          name="Vikram Badesara"
          position="Software Developer"
          aboutMe={aboutMe}
          linkedIn={linkedIn}
          profilePage={profilePage}
          github={github}
          resumeLink={resumeLink}
          profileImage={profileImageSrc}
        />
      </div>
    </>
  )
}

export default App;
