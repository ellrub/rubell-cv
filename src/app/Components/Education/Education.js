import "./Education.css";

const Education = ({ educationList }) => {
    return (
      <div className="education-div">
        {educationList.map((edu, index) => (
          <div className="edu-outer-div" key={index}>
            <img src={edu.image} alt={edu.altText} />
            <div className="edu-inner-div">
              <p className="edu-date">{edu.startDate} - {edu.endDate}</p>
              <h4>{edu.degree}</h4>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Education;
