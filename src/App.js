import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  
  //1
  // rules for all useEffect statues:
  //render
  //useEffect

  //useEffect with empty dependency array
  //run one time only
  //when: after first render

  useEffect(() => {
    //ADD Your CODE
    console.log("use effect one time");
  }, []); //useeffect dependency array

  console.log("render");

  // ------------------------------------- //

  //2
  //useEffect with not empty dependency array
  //run when update happen
  //when: after first render, and when dependency updated

  //render
  //useEffect
  //update the state -> re-render (sec render)
  //UseEffect -> watcher -> dependency -> name ? updated -> yes -> do the effect / no -> skip the effect

  useEffect(() => {
    //ADD Your CODE
    if (name || phone) {
      console.log("update");
    }
  }, [name, phone]); //useeffect dependency array

  // //watcher -> state / props / var
  //use effect -> return clean / init clean

  // ------------------------------------- //

  //3
  //useEffect with no dependency array
  //run when update happen
  //when: run after first render, and after re-render

  useEffect(() => {
    console.log("effect");
  });

  //render
  //change->state
  //re render
  //use Effect

  return (
    <div className="App">
      <div className="App-header">
        <label>Name </label>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <br />
        <label>Phone </label>
        <input onChange={(e) => setPhone(e.target.value)} value={phone} />

        <p>
          Name: {name} <br /> Phone: {phone}
        </p>
      </div>
    </div>
  );
}
