import React from 'react';

const EducationItem = ({ education }) => (
  <li>
    <h3>{education.degree}</h3>
    <p>{education.school}</p>
    <p>{education.dates}</p>
  </li>
);

const WorkItem = ({ work }) => (
  <li>
    <h3>{work.position}</h3>
    <p>{work.company}</p>
    <p>{work.dates}</p>
  </li>
);

const EducationAndExperience = ({ education, work }) => (
  <div>
    <h2>Education</h2>
    <ul>
      {education.map((edu) => (
        <EducationItem key={edu.id} education={edu} />
      ))}
    </ul>
    <h2>Experience</h2>
    <ul>
      {work.map((job) => (
        <WorkItem key={job.id} work={job} />
      ))}
    </ul>
  </div>
);

export default EducationAndExperience;