// ** Please note that the styling must separate in other file, later we will talk about it.
// ! It's a bad practice to use ** INLINE ** Styling.

import SubHeader from "./SubHeader";

export default function Header() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#34435E",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "30px",
        boxShadow: "0px 5px 13px rgba(0,0,0, 0.4)",
      }}
    >
      <h1>Challenge</h1>
      <SubHeader SubHeader={"Using Props"} />
    </div>
  );
}
