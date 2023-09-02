import Header from "./components/Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* POSTS CONTAINER */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
        >
          {/* == POSTS CONTAINER == */}
          <div style={{ width: "70%" }}>
            <Post
              postName="GSG React Training"
              postBody="Newspapers say that GSG training is the best training in the universe 🌚"
            />

            <Post
              postName="Arab American University - Jenin"
              postBody="The software engineering course taught by Dr. Thaer is the best course 💯"
            />

            <Post
              postName="React JS Vs. Angular"
              postBody="Nothing to say. React is the BEST EVER !!"
            />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
