import s from "./Options.module.css"

const Options = ({ feedback, total, reset }) => {
   
    return(
    <ul className={s.optionsContainer}>
    <button className={s.optionsBnt} onClick={() => feedback('good')}>👍</button> 
    <button className={s.optionsBnt} onClick={() => feedback('neutral')}>😐</button>
    <button className={s.optionsBnt} onClick={() => feedback('bad')}>👎</button> 
{total > 0 && <button className={s.resetBtn} onClick={() =>reset()}>Resed</button>}
   
  
</ul>)
        }
    


export default Options;