import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Hello from "./pages/Hello";
import About from "./pages/About";
import { Link } from "react-router-dom";
import PostDetails from "./pages/PostDetails";
import { PostContext } from "./Context/PostContext";
import PostsList from "./pages/PostsList";


function App() {
  const posts = [
    {
      id: 1,
      title: "This is Post 1",
      body: "This is post content"
    },
    {
      id: 2,
      title: "This is Post 2",
      body: "This is post content"
    },
    {
      id: 3,
      title: "This is Post 3",
      body: "This is post content"
    },
    {
      id: 4,
      title: "This is Post 4",
      body: "This is post content"
    },
  ];
  return (
    <PostContext.Provider value={posts}>
      <>
        <div className="App">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/helloworld">
            <button>Hello</button>
          </Link>
          <Link to="/posts">
            <button>Posts</button>
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/helloworld" element={<Hello />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/postDetails/:postId" element={<PostDetails />} />
        </Routes>
      </>
    </PostContext.Provider>
  );
}

export default App;
