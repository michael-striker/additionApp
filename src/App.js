import React, {useState} from 'react';
import './App.css';

function Win(props) {

  return (
    <div>
      <div className='winComponent'>
          Ты выиграл! Поздравляю!
      </div>
      <button id='refreshButton' onClick={props.refreshAll}>
          Начать заново
      </button>
    </div>
  )
}

function App(props) {
  const random = () => Math.ceil(Math.random()*10);
  const [num1, setNum1]= useState(random);
  const [num2, setNum2]= useState(random);
  const [response, setResponse] = useState('');
  const[param, setParam]= useState(false);
  const[score, setScore]= useState(0);
  const updateResponse = (event) => {
      setResponse(event.target.value)
 };
  const answerCheck = (event) => {
   if (event.key === "Enter"){
      (num1 + num2) === parseInt(response) ?  
      setNum1(random) || setNum2 (random) || setResponse('') || setParam('black') || setParam(false) || setScore(score + 1) : 
      setParam(true)
      setResponse('')
   }
 };
  const refreshAll = () => {
   setScore(0)
 };

return (
  <div className="App">
     {score > 4 ? <Win refreshAll={refreshAll} /> :
        ( <div>    
             <div className={param ? 'board' : ''}>
                {num1} + {num2} 
             </div>
                     <div>
                        <input id='input' value={response} onChange={updateResponse} onKeyPress={answerCheck} />
                        <div>
                          Ваш счет: {score}
                        </div>
                     </div>
           </div>
        )
    }
  </div>
  );
}

export default App;
