
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';


const App = () => {
        const [values, setValues] = useState(() => {
                const feedbaks = window.localStorage.getItem("saved-feedbaks");
                console.log(feedbaks)
                if (feedbaks ) {
                        return JSON.parse(feedbaks);
                }
                return {
                        good: 0,
                        neutral: 0,
                        bad: 0
                }
        });
        useEffect(() => {
        window.localStorage.setItem("saved-feedbaks", JSON.stringify(values));
        },[values]);

        const totalFeedback = values.good + values.neutral + values.bad;

        const updateFeedback = feedbackType => {
                console.log(feedbackType)
                setValues(prev => ({
                        ...prev,
                        [feedbackType]: prev[feedbackType] + 1,

                })
                        
                        
                )
        }
          const resetFeedback = () => {
        setValues({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };
  
   
        return (
                <>
                        <Description />
                        <Options feedback={updateFeedback} total={totalFeedback} reset={resetFeedback} />
                        {totalFeedback ? <Feedback fbValues={values} total={totalFeedback} /> : <Notification/>} 
                        
                </>
        );
}

export default App
