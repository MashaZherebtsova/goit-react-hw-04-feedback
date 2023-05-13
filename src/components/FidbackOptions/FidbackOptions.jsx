import ProtoTypes from 'prop-types';
import React from 'react'
import css from './FeedbackOptions.module.css';

export function FidbackOptions({options, onLeaveFeedback}) {
  return (
    <div className={css.btn}>
      {options.map(item => {
        return (
            <button key={item} name= {item} onClick={onLeaveFeedback} className={css.feedbackBtn}>{item}</button>
        )
      })}
    </div>
  )
}
FidbackOptions.prototype = {
    options: ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
    onLeaveFeedback: ProtoTypes.func.isRequired,
};