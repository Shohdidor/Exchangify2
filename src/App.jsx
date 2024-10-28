import React from 'react'
import Layout from './Layout/Layout'
import Home from './page/Home/Home'
import Login from './page/Login/Login'
import Information from './page/Information/Information'
import NotFound from './page/NotFound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './page/Profile/Profile'

function App() {
  const  router = createBrowserRouter ( [ 
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          index : true ,
          element : <Home />
        },
        {
          path : "login",
          element : <Login />
        },
        {
          path : "information/:id",
          element : <Information />
        },
        {
          path : "profile",
          element : <Profile />
        },
        {
          path : "*",
          element : <NotFound />
        }
      ]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App