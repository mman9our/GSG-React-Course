import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";
import Mycomponent from "./Mycomponent";
import { LoanFormContext } from "../Contexts/LoanFormContext";

export default function LoanForm() {
  const [showModal, setShowModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    isEmployee: false,
    salary: ""
  });

  const btnIsDisabeld = loanInputs.name === "" || loanInputs.age == "";

  function handleSubmitButton(e) {
    e.preventDefault()
    setShowModal(true)
    const { age, phoneNumber } = loanInputs;

    if (age < 18 || age > 65) {
      setErrorMessage("The Age is not allowed")
    } else if(isNaN(phoneNumber)){
      setErrorMessage("The phone number not string")
    } else if (phoneNumber.length > 10) {
      setErrorMessage("The phone number Invalid")
    }
  }

  function handleDivClicked() {
    if (showModal)
    {
      setShowModal(false);
    }
  }

  function handlePhoneNumberChange(value) {
    setLoanInputs({...loanInputs, phoneNumber : value})
  }

  function handleNameChange(value) {
    setLoanInputs({...loanInputs, name : value})
    
  }

  function handleAgeChange(value) {
    setLoanInputs({...loanInputs, age : value})
    
  }

  return (
    <div onClick={handleDivClicked} className="flex" style={{ flexDirection: "column" }}>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <LoanFormContext.Provider value={{labelTitle : "Name : ", handleChange : handleNameChange, inputValue:loanInputs.name}}>
        <Mycomponent  />
        </LoanFormContext.Provider>

        
        <LoanFormContext.Provider value={{labelTitle : "Phone Number : ", handleChange : handlePhoneNumberChange, inputValue:loanInputs.phoneNumber}}>
        <Mycomponent />
        </LoanFormContext.Provider>

        <LoanFormContext.Provider value={{labelTitle : "Age: ", handleChange : handleAgeChange, inputValue:loanInputs.age}}>
        <Mycomponent  />
        </LoanFormContext.Provider>
        

        {/* <label>Age:</label>
        <input value={loanInputs.age} onChange={(e) => {
          setLoanInputs({...loanInputs , age : e.target.value})
        }}/> */}

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input type="checkbox" value={loanInputs.isEmployee} onChange={(e) => {
          setLoanInputs({...loanInputs , isEmployee : e.target.checked})
        }}/>

        <label>Salary:</label>
        <select value={loanInputs.salary} onChange={(e) => {
          setLoanInputs({...loanInputs , salary : e.target.value})
        }}>
          <option>Less than 500$</option>
          <option>Between 500$ and 2000</option>
          <option>Above 2000</option>
        </select>

        <button className={btnIsDisabeld ? "disabled": ""} disabled={btnIsDisabeld} onClick={handleSubmitButton} id="submit-loan-btn">Submit</button>
      </form>

      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}
