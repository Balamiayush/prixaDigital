import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Page2Main from './page2/Page2Main.jsx'

const router  = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
    }, 
    {
        path:"/portfilo",
        element: <Page2Main/>
    }
])
createRoot(document.getElementById('root')).render(
       <div className="body bg-black">
        <div className="page-wrapper">
          <div className="main-wrapper"></div>
        <Navbar />
        <RouterProvider router={router} />
        </div>
        </div>
  
)
