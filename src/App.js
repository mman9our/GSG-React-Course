import "./App.css";
import Header from "./Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";

function App() {
  const posts = [
    {
      id: 1,
      postName: "React Course",
      postBody: "List Rendering",
    },

    {
      id: 2,
      postName: "Gaza Sky Geeks",
      postBody: "This is the second body",
    },

    {
      id: 3,
      postName: "The Third post",
      postBody: "This is the third body",
    },
    {
      id: 4,
      postName: "The Fourth post",
      postBody: "This is the fourth body",
    },
  ];

  const postsList = posts.map((post) => {
    return (
      <Post key={post.id} postName={post.postName} postBody={post.postBody} />
    );
  });
  return (
    <div className="App">
      <Header />

      {/* POSTS CONTAINER */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {/* == POSTS CONTAINER == */}
          <div style={{ width: "70%" }}>{postsList}</div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
