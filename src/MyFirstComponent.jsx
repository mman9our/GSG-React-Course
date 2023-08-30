
import "./MyFirstComponent.css"
export default function MyFirstComponent() {

    const x = 10

    const person = {
        name: "Mohamed",
        age: 23,
    }

    // const elmStyle = {
    //     backgroundColor: "red",
    // }


    return <div>
        <h1 style={{ backgroundColor: "red", }}>Gaza Sky Geeks</h1>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <button onClick={sayHello}>Click Me</button>
        <h4 className={person.name === "Mohamed" ? "greenBg" : "redBg"}>Check Name</h4>
    </div>
}


function sayHello() {
    alert("Hello")
}