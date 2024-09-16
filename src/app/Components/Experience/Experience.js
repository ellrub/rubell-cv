import "./Experience.css";

const Experience = ({ experienceList }) => {
    return (
      <div className="experience-div">
        {experienceList.map((exp, index) => (
          <div className="exp-outer-div" key={index}>
            <img src={exp.image} alt={exp.altText} />
            <div className="exp-inner-div">
              <p className="exp-date">{exp.startDate} - {exp.endDate}</p>
              <h4>{exp.position}</h4>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Experience;