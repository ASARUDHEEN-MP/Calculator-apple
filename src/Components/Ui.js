    import {useState} from 'react';
    import './Ui.css';
    
    function Ui() {
        const [input, setInput] = useState(""); // To store the current input
        const [result, setResult] = useState(0); // To store the result
        
       const numbers=(n)=>{
        
         setInput(input+n);

          
        }
        console.log(input);
        const handleOperatorClick = (operator) => {
            if(input==""){
                setInput("")
            }else if (input==='0'){
                setInput("")
            }
            else if (operator === '+') {
              setInput(input + operator);
            } else if (operator === '-') {
              setInput(input + operator); // Append the '-' operator
            }else if (operator === '*') {
                setInput(input + operator); // Append the '-' operator
              }
              else if (operator === '/') {
                setInput(input + operator); // Append the '-' operator
              }
              else if (operator === '%') {
                
                setInput(input + operator); // Append the '-' operator
              }
          };
          
          const clearInput = () => {
            setInput("");
            setResult(0);
          };

          const calculateResult=()=>{

            try{
                console.log(11)
                let calculatedResult;
                if (input.includes('%')) {
                    // Extract the number before the '%' sign
                    const percentageValue = parseFloat(input) / 100;
              
                    // Calculate the result based on the percentage value
                    calculatedResult = percentageValue;
                  } else {
                    // If there is no '%' sign, evaluate the expression normally
                    calculatedResult = eval(input);
                  }
                setResult(calculatedResult)
                setInput(calculatedResult.toString());
            }catch (error) {
                setResult("Error");
              }

          }
       
        
    return (
       
        <div className="container ">
          <div className='title'>Calculator</div>
        <div className='calbox'>
            <div className='square-box'>
           <div className="number">{input || result}</div>
            </div>
            
            <div className='square1'> {/* Add the square1 box after the square-box */}
            <button className='button1'  onClick={clearInput}>AC</button>
            <button className='button1'>+/-</button>
            <button className='button1'  onClick={() => handleOperatorClick('%')}>%</button>
            <button className='button2'onClick={() => handleOperatorClick("/")}>÷</button>
            </div>
            <div className='square2'> {/* Add the square2 box below square1 */}
            <button className='button1' onClick={()=>numbers(7)}>7</button>
            <button className='button1' onClick={()=>numbers(8)}>8</button>
            <button className='button1' onClick={()=>numbers(9)}>9</button>
            <button className='button2' onClick={() => handleOperatorClick("*")}>x</button>
    </div>
    <div className='square3'> {/* Add the square2 box below square1 */}
            <button className='button1'  onClick={()=>numbers(4)}>4</button>
            <button className='button1'  onClick={()=>numbers(5)}>5</button>
            <button className='button1'  onClick={()=>numbers(6)}>6</button>
            <button className='button2' onClick={() => handleOperatorClick('-')}>-</button>
    </div>
    <div className='square4'> {/* Add the square2 box below square1 */}
            <button className='button1'  onClick={()=>numbers(1)}>1</button>
            <button className='button1'  onClick={()=>numbers(2)}>2</button>
            <button className='button1'  onClick={()=>numbers(3)}>3</button>
            <button className="button2" onClick={() => handleOperatorClick("+")}>+</button>
    </div>
    <div className='square5'> {/* Add the square2 box below square1 */}
            <button className='button0'  onClick={()=>numbers(0)}>0</button>
            <button className='button1' onClick={()=>numbers(".")}>.</button>
            <button className='button2' onClick={calculateResult}>=</button>
    </div>
            
            
        </div>
        </div>
       
        
    );
    }

    export default Ui;
