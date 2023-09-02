export default function Post({ postName = "No Title", postBody = "No body" }) {
  return (
    <div
      style={{
        borderRadius: "20px",
        padding: "10px",
        border: "solid #34435E 5px",
        background: "white",
        margin: "25px",
      }}
    >
      <h2 style={{ color: "#B88E8D", fontSize: "1.5rem", fontWeight: 900 }}>
        {postName}
      </h2>
      <hr />
      <p style={{ color: "#B88E8D", fontSize: "1rem", fontWeight: 500 }}>
        {postBody}
      </p>
    </div>
  );
}

// export const GSG = () => {
// 	return (
// 		<>
// 			<h1>Hello People</h1>
// 		</>
// 	);
// };
