import React from 'react';

function getFormattedDate(timestamp) {
  const dateTime = new Date(timestamp);
  return `${('0' + dateTime.getHours()).slice(-2)}.${('0' + dateTime.getMinutes()).slice(-2)}`;
}

const PredictionLayout = ({ prediction, onClick }) => {
  const handlePredictionClick = event => {
    onClick(prediction.dt)
  };

  return (
    <section onClick={handlePredictionClick}>
      <article>
        {getFormattedDate(prediction.dt_txt)}
      </article>
      <article>
        {prediction.main.temp}°C
      </article>
    </section>
  );
};

export default PredictionLayout;