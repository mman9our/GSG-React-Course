import React, { useContext } from 'react'
import { LoanFormContext } from '../Contexts/LoanFormContext'
import { UserContext } from '../Contexts/UserContext'

function MyInput() {
  const loanInputs = useContext(LoanFormContext)
  const userData = useContext(UserContext)
  return (
    <>  <label>{userData.name } {loanInputs.labelTitle}</label>
    <input value={loanInputs.inputValue} onChange={(e) => {
      loanInputs.handleChange(e.target.value)
          }} />
      </>
  )
}

export default MyInput