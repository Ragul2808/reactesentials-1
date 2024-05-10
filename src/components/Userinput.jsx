import { useState } from "react";

export default function Userinput(){
    const [userInput, setUserInput] =useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duratio: 10

    });
    function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        });
          
    }
    return ( <section id="user-input">
        <div className="input-group">
            <p>
                <label>Intial Investment</label>
                <input type="number"
                 required 
                 onChange={ (event) => handleChange('intialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Annual investment
                </label>
                <input type="number" required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <labe>Expected Returns</labe>
                <input type="number" required/>
            </p>
            <p>
                <label>
                    Annual Investment
                </label>
                <input type="number" required/>
            </p>
        </div>
    </section>
        
    )
}