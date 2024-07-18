import React from 'react';
import BaseLayout from "./layouts/BaseLayout";
import Card from "./components/Card";

const PersonalCardPortfolio = (name, position, aboutMe, linkedIn, github, resumeLink, profileImage) => {
  return (
    <>
      <Card
        name={name}
        position={position}
        aboutMe={aboutMe}
        linkedin={linkedIn}
        github={github}
        resumeLink={resumeLink}
        profileImage={profileImage}
      />
    </>
  );
};

export default PersonalCardPortfolio;
