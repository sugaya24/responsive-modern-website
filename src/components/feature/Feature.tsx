import React from 'react';
import './feature.css';

type Props = {
  title: string;
  text: string;
};

const Feature = (props: Props) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{props.title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Feature;
