import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';

function App() {

  const HeaderLayout = () => (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );

  const router = createBrowserRouter([
    {
      element: <HeaderLayout />,
      errorElement: <ErrorPage />,
      children:[
           {
               path: "/",
               element: <Home />,
           },
           {
               path: "/contact",
               element: <Contact />
           },
           {
            path: "/about",
            element: <About />
        },
      ]
  }
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App
