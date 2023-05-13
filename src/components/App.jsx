
import {useState } from 'react'
import { Section } from './Section/Section'
import { FidbackOptions } from './FidbackOptions/FidbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'



export function App() {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
const options = {
  good: good,
  neutral: neutral,
  bad: bad,
};
//const total = countTotalFeedback ();

const countTotalFeedback = () => {
  return Object.values (good,neutral,bad).reduce((acc,item)=>acc+item, 0)

}
const countPositiveFeedbackPercentage = () => {
  const total = countTotalFeedback ();
  if(!total){
    return 0
  }
return Math.round(good/countTotalFeedback() *100)
}
const onLeaveFeedback= (e) => {
const {name} = e.target;
switch (name) {
  case 'good': setGood(good + 1);
  break;
  case 'neutral': setNeutral(neutral+1);
  break;
  case 'bad': setBad(bad+1);
  break;
  default: break; }
}

  return (
  
      <div>
        <Section title='Please leave feedback'>
        <FidbackOptions options={options} onLeaveFeedback= {onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() !== 0 ?
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/> : <Notification message='No feedback given'/> }
        </Section>
      </div>
    
  )
}


