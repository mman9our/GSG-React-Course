import React, { useState } from "react";

function MyForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    genralInfo: "",
    isStudent: false,
  });

  function handleCheckBoxChange(event) {
    console.log(event.target.checked);
    setFormInputs({ ...formInputs, isStudent: event.target.checked });
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>Name:</label>
        <input
          value={formInputs.name}
          onChange={(event) => {
            setFormInputs({ ...formInputs, name: event.target.value });
          }}
        />

        <hr></hr>

        <label>Email:</label>
        <input
          value={formInputs.email}
          onChange={(event) => {
            setFormInputs({ ...formInputs, email: event.target.value });
          }}
        />

        <hr></hr>

        <label>Age:</label>
        <input
          value={formInputs.age}
          onChange={(event) =>
            setFormInputs({ ...formInputs, age: event.target.value })
          }
        />

        <hr></hr>
        <label>Genral Info:</label>
        <textarea
          value={formInputs.genralInfo}
          onChange={(event) => {
            setFormInputs({ ...formInputs, genralInfo: event.target.value });
          }}
        />

        <hr></hr>

        <label>Are you student</label>
        <input
          type="checkbox"
          checked={formInputs.isStudent}
          onChange={handleCheckBoxChange}
        />
        <hr></hr>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
