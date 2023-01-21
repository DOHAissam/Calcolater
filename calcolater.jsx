
import { Component } from 'react';
import './App.css';
import { useState } from 'react';



export function MainCal() {


        const [Calc, setCalc] = useState("")
        const [Result, setResult] = useState("")
        const ops = ['/', '*', '+', '-', '.']


        const UpdateCalc = value => {

                if (
                        ops.includes(value) && Calc === "" ||
                        ops.includes(value) && ops.includes(Calc.slice(-1))
                ) {
                        return;
                }

                setCalc(Calc + value)

                if (!ops.includes(value)) {
                        setResult(eval(Calc + value).toString())
                }

        }

        const createDigit = () => {
                const digit = [];
                for (let i = 1; i < 10; i++) {
                        digit.push(

                                <button onClick={() => UpdateCalc(i.toString())}
                                        key={i} >
                                        {i}

                                </button>
                        )

                }
                return digit;
        }


        const calculate = () => {
                setCalc(eval(Calc).toString());


        }

        const deletLastDigit = () => {

                if (Calc === '') {
                        return;
                }

                const value = Calc.slice(0 , -1);

                setCalc(value)
        }

        return (

                <div className='App'>
                        <div className='calcolator-grid'>
                                <div className='output'>

                                        {Result ? <span> {Result} </span> : ""}

                                        {Calc || "0"}
                                </div>

                                <div className='oprator'>
                                        <button onClick={() => UpdateCalc('/')}>/</button>
                                        <button onClick={() => UpdateCalc('*')}>*</button>
                                        <button onClick={() => UpdateCalc('+')}>+</button>
                                        <button onClick={() => UpdateCalc('-')}>-</button>

                                        <button onClick={deletLastDigit}>DEL</button>

                                </div>
                                <div className='digits'>
                                        {createDigit()}
                                        <button onClick={() => UpdateCalc('0')}>0</button>
                                        <button onClick={() => UpdateCalc('.')}>.</button>


                                        <button onClick={calculate}>=</button>
                                </div>

                        </div>

                </div>








        )

}





