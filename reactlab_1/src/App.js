import{ useState, useRef} from "react";
import "./App.css";

function App()
{
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e)
  {
    e.preventDefault();
    setResult((result) => Number(inputRef1.current.value) + Number(inputRef2.current.value));
  };
 
  function minus(e)
  { 
    e.preventDefault();
    setResult((result) => Number(inputRef1.current.value) - Number(inputRef2.current.value));
  };
 
  function times(e)
  {
    e.preventDefault();
    setResult((result) => Number(inputRef1.current.value) * Number(inputRef2.current.value));
  }; 
 
  function divide(e)
  {
    e.preventDefault();
    var paragraph = document.getElementById("paragraphId");
    if(!inputRef2.current.value || inputRef2.current.value === "" || Number(inputRef2.current.value) === 0)
    {
      paragraph.style.color = "red";
      resultRef.current.value = "You can't divide by 0";
    }
    else
    {
      paragraph.style.color = "black";
      resultRef.current.value = Number(inputRef1.current.value) / Number(inputRef2.current.value);
    }
    setResult((result) =>    
      result = resultRef.current.value    
    ); 
  };
 
  function resetInput1(e)
  {
    e.preventDefault();
    inputRef1.current.value = 0;
  };

  function resetInput2(e)
  {
    e.preventDefault();
    inputRef2.current.value = 0;
  };
 
  function resetResult(e)
  { 
  	e.preventDefault();
    setResult((result) => result  = 0);
  };
 
  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <div className="flexContainer">
          <div>
            <button className="orange" onClick={resetResult}>reset result</button>
          </div>
          <div>
            <p id="paragraphId" ref={resultRef}>{result}</p>
          </div>
        </div>
        <div className="flexContainer">
          <div>
            <button className="orange" onClick={resetInput1}>reset input 1</button>            
          </div>
          <div>
            <input
              pattern="[0-9]"
              ref={inputRef1}
              type="number"
              placeholder="Type a number 1">
            </input>
          </div>
        </div>
        <div className="flexContainer">
          <div>        
            <button className="orange" onClick={resetInput2}>reset input 2</button>
          </div>          
          <div>
            <input
              pattern="[0-9]"
              ref={inputRef2}
              type="number"
              placeholder="Type a number 2">
            </input>
          </div>
        </div>
        <div className="flexContainer">
          <button className="white" onClick={plus}>add</button>
          <button className="white" onClick={minus}>subtract</button>
          <button className="white" onClick={times}>multiply</button>
          <button className="white" onClick={divide}>divide</button>
        </div>
      </form>
    </div> 
  );
}

export default App;