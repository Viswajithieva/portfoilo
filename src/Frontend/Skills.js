import "./Skills.css";

function Skills() {
  const Skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
  ];

  const Skills2 = [
    'Node.js',
    'TypeScript',
  ];

  const Skills3 = [
    'MongoDB',
    'PostgreSQL',
  ]

  return (
    <section className="Skills-section">
      <h1>Skills:</h1>
      
      <h2>Front-End</h2>
      <div className="Skills-show">
        {Skills.map((Skill, index) => (
          <div className="skills-card" key={index}>
            {Skill}
          </div>
        ))}
      </div>

      <div className="Skills-section1">
        <h2>Back-End</h2>
        <div className="Skills-show">
          {Skills2.map((Skill2, index) => (
            <div className="skills-card" key={index}>
              {Skill2}
            </div>
          ))}
        </div>
      </div>
    
    <div className="Skills-section2">
        <h2>DataBase</h2>
        <div className="Skills-show">
          {Skills3.map((Skill2, index) => (
            <div className="skills-card" key={index}>
              {Skill2}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Skills;
