

const Options = ({ feedback, total, reset }) => {
   
    return(
    <ul>
    <button onClick={() => feedback('good')}>Good</button> 
    <button onClick={() => feedback('neutral')}>Neutral</button>
    <button onClick={() => feedback('bad')}>Bad</button> 
            {total>0  && <button onClick={() =>reset()}>Resed</button>}
   
  
</ul>)
        }
    


export default Options;