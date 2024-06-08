import Header from "./components/Header"
import UserInput from "./components/Userinput"
import { useState } from "react";
import Result from "./components/Result";


function App() {
  const[userInput,setUserInput] =useState({
    initialInvestment: 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
});

function handleChange (inputIndentifier,newValue){
  setUserInput(prevUserinput=>{
   return {
       ...prevUserinput,
       [inputIndentifier] : +newValue,
   }
  });
}


  return (
    <>
    <Header/>
    <UserInput  userInput={userInput}onChange={handleChange} />
    <Result input={userInput}/>
    </>
  )
}

export default App
