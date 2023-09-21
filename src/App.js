import "./App.css";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { PostContext } from "./Context/PostContext";
import Hello from "./Pages/Hello";
import PostsList from "./Pages/PostsList";
import PostDetails from "./Pages/PostDetails";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import AddPost from "./Pages/AddPost";
import DeletePost from "./Pages/DeletePost";
import PostLayout from "./Pages/PostLayout";

function App() {
  const posts = [
    {
      id: 1,
      title: "This is Post 1",
      body: "This is post content 1",
    },
    {
      id: 2,
      title: "This is Post 2",
      body: "This is post content 2",
    },
    {
      id: 3,
      title: "This is Post 3",
      body: "This is post content 3",
    },
    {
      id: 4,
      title: "This is Post 4",
      body: "This is post content 4",
    },
  ];

  return (
    <PostContext.Provider value={posts}>
      <>
        <div className="App">
          <Link to="/">
            <button style={{ fontSize: "25px", margin: "30px" }}>Home</button>
          </Link>
          <Link to="/about">
            <button style={{ fontSize: "25px", margin: "30px" }}>About</button>
          </Link>
          <Link to="/helloworld">
            <button style={{ fontSize: "25px", margin: "30px" }}>Hello</button>
          </Link>
          <Link to="/posts">
            <button style={{ fontSize: "25px", margin: "30px" }}>Posts</button>
          </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/helloworld" element={<Hello />} />
            <Route path="/about" element={<About />} />

            <Route path="/posts" element={<PostLayout />}>
              <Route index element={<PostsList />} />
              <Route path="add" element={<AddPost />} />
              <Route path="delete" element={<DeletePost />} />
              <Route path=":postId" element={<PostDetails />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    </PostContext.Provider>
  );
}

export default App;
