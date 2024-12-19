const FeedbackStatistics = ({ feedback, total }) => {
    const positivePercentage = Math.round((feedback.good / total) * 100);
  
    return (
      <div>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total feedback: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  };
  
  export default FeedbackStatistics;
  