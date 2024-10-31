import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import Hader from "./Component/hedar/Hader.jsx";
import About from "./Component/about/About.jsx";
import Contectus from "./Component/Contect/Contectus.jsx";
import Users from "./Component/Users/Users.jsx";
import Usrsdetels from "./Component/UsersDetels/Usrsdetels.jsx";
import Post from "./Component/Post/Post.jsx";
import Postdetels from "./Component/Postdetels/Postdetels";
import Errorpage from "./Component/Errorpage/Errorpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contect",
        element: <Contectus></Contectus>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/users/:UserId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element: <Usrsdetels></Usrsdetels>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Post></Post>,
      },
      {
        path: "/posts/:DetelsId",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.DetelsId}`
          ),
        element: <Postdetels></Postdetels>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
