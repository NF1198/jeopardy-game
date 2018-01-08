import React from 'react';
import classNames from 'classnames';


// Made into a pure function, as class notation was not necessary
export default props => (
  <div className="question-container">
    <div className={classNames({ 'question': true, 'big': (props.question.question.length < 25 && (!props.question.imageLink || !props.question.youtubeLink)) })}>
      {props.question.question}
      {props.question.imageLink
        ? <img className="img-responsive centered" src={props.question.imageLink} alt="question image" />
        : null
      }
    </div>
  </div>
);
