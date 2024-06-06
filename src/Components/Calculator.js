import React, { useEffect, useState } from 'react'

function Calculator() {
    const [input,setInput] = useState('')
    const [formulaScreen,setFormulaScreen] = useState('')

    const handleCalculate = (num)=>{
        if(num == '='){
            try{
               let result =  eval(input).toString()
                setFormulaScreen(input + "=" + result)
                setInput(result)
            }catch(err){
                setInput('Error')
                setFormulaScreen('')
            }
        }else if (num === '.') {
            const lastNumber = input.split(/[\+\-\×\÷]/).pop();
            if (!lastNumber.includes('.')) {
                setInput((prevInput) => prevInput + num);
                setFormulaScreen((prevFormula) => prevFormula + num);
            }
    }else{
        setInput((prevNum) => prevNum + num)
        setFormulaScreen((prevFormula) => prevFormula + num)
     }
        
    }
   
  return (
    <>
          <div className="myCalculator">
        <div className="inputField">
            <div className="formulaScreen">{formulaScreen}</div>
            <input type="text" id="display" value={input || 0} readOnly/>
        </div>
        <div className="container">
            <button className="btn" onClick={() => 
           { setInput("")
             setFormulaScreen("")}} id="clear">AC</button>
            <button className="btn" onClick={() => handleCalculate("=")} id="equals">=</button>
            <button className="btn" onClick={() => handleCalculate("+")} id="add">+</button>
            <button className="btn" onClick={() => handleCalculate("-")} id="subtract">-</button>
            <button className="btn" onClick={() => handleCalculate("*")} id="multiply">×</button>
            <button className="btn" onClick={() => handleCalculate("/")} id="divide">/</button>
            <button className="btn" onClick={() => handleCalculate("1")} id="one">1</button>
            <button className="btn" onClick={() => handleCalculate("4")} id="four">4</button>
            <button className="btn" onClick={() => handleCalculate("8")} id="eight">8</button>
            <button className="btn" onClick={() => handleCalculate("9")} id="nine">9</button>
            <button className="btn" onClick={() => handleCalculate("2")} id="two">2</button>
            <button className="btn" onClick={() => handleCalculate("3")} id="three">3</button>
            <button className="btn" onClick={() => handleCalculate("5")} id="five">5</button>
            <button className="btn" onClick={() => handleCalculate("6")} id="six">6</button>
            <button className="btn" onClick={() => handleCalculate("7")} id="seven">7</button>
            <button className="btn" onClick={() => handleCalculate(".")} id="decimal">.</button>
            <button className="btn" onClick={() => handleCalculate("0")} id="zero">0</button>
        </div>
    </div>
    </>
  )
}

export default Calculator
