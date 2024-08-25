import Experience from '../Experience/Experience.js';
import Education from '../Education/Education.js';
import Recommendation from '../Recommendation/Recommendation.js';
import data from '../../data.json';

const Main = () => {
    const { education, experience, recommendation } = data;
  return (
    <main>
        <div>
            <h3>Utdanning</h3>
            <Education educationList={education}/>
        </div>
        <div>
            <h3>Erfaring</h3>
            <Experience experienceList={experience}/>
        </div>
        <div>
            <h3>Anbefalinger</h3>
            <Recommendation recommendationList={recommendation}/>
        </div>
    </main>
  );
}

export default Main;
