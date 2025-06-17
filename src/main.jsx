import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Page2Main from './page2/Page2Main.jsx'
  import Lenis from 'lenis'

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
    <RouterProvider router={router}/>

  
)
