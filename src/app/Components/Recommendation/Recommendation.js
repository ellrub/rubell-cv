import "./Recommendation.css";

const Recommendation = ({ recommendationList }) => {
	return (
		<div className="recommendation-div">
			{recommendationList.map((rec, index) => (
				<div className="rec-outer-div" key={index}>
					<img src={rec.image} alt={rec.altText} />
					<div className="rec-inner-div">
						<p className="rec-position">{rec.position}</p>
						<h4>{rec.employer}</h4>
						<p className="rec-company">{rec.company}</p>
						<p className="rec-recommendation">{rec.recommendation}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Recommendation;