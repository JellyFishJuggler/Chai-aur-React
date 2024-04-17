import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
// import App from './App.jsx'
import './index.css'
import User from './component/User'
import Github, { githubInfoLoader } from './component/Github/Github'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        //Home
        {
          path: '',
          element: <Home/>
        },
        //About
        {
          path: 'about',
          element: <About/>
        },
        //Contact
        {
          path: 'contact',
          element: <Contact/>
        },
        //User
        {
          path: 'user/:userid',
          element: <User/>
        },
        //Github Followers
        {
          loader:githubInfoLoader,                      //yeh lag reduce krdeta h aur yeh ek api call krta h
          path: 'github',
          element: <Github/>
        }
      ]
    }
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
