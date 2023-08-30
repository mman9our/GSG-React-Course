
function MyFirstComponent() {
  const person = {
    name: "Mohamed",
    age: 23,
  }
  const x = 10
  return (
    <div>
      <h1>{x * 10} 10 * 10 Gaza Sky Geeks</h1>
      <h2>{person.name} ReactJS</h2>
      <h2>{person.age} ReactJS</h2>
    </div>
  );
}

export default MyFirstComponent;

