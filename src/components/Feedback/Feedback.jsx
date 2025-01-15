import s from "./Feedback.module.css"
const Feedback = ({ fbValues, total }) => {
   
   console.log(fbValues)
    return(
<ul className={s.feedbackContainer}>
    <li>Good: {fbValues.good}</li>
    <li>Neutral:{fbValues.neutral}</li>
    <li>Bad: {fbValues.bad} </li>
    <li>Total: {total}</li>
    <li>Positive: {Math.round((fbValues.good / total) * 100)}%</li>         
</ul>)
        }
    


export default Feedback;