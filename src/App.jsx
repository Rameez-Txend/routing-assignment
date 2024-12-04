import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import NotFound from './components/NotFound';
import { Suspense, lazy } from 'react';
import Blog from './components/Dashboard';
const HeavyDataPage = lazy(() => import('./components/HeavyDataPage')); // Lazy load the new page

const router =createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/blog",
      element:
      <div>
        <Navbar/>
        <Blog/>
      </div>
    },
    {
      path:"/test/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path: "/heavy-data",
      element: (
        <Suspense fallback={<div>Loading heavy data page...</div>}>
          <HeavyDataPage />
        </Suspense>
      ),
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]
);
function App() {
  return (
    <div>
      <RouterProvider router={router}/>

    </div>
  )
}

export default App