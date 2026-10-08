import Layout from "./component/Layout/Layout";
import { createBrowserRouter, ScrollRestoration } from "react-router";
import Home from "./pages/Home/Home";
import BlogsDetails from "./pages/BlogsDetails/BlogsDetails";
import { RouterProvider } from "react-router";
import NotFound from "./pages/NotFound/NotFound";
import Blogs from "./pages/Blogs/Blogs";
import "./App.css";
import About from "./pages/About/About";

let route = createBrowserRouter([
  {path : "", element : <Layout/> ,children : [
    {path : "", element : <Home/>},
    {path : "about", element : <About/>},
    {path : "blogsdetails/:slug", element : <BlogsDetails/>},
    {path : "blogs", element :<Blogs/>},
    {path : "*", element : <NotFound/>}

  ]}
])

export default function App() {
  return (
    <>
    <RouterProvider router={route}/>
    </>
  );
}
