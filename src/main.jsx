import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dash from './components/Dash.jsx'
import About from './About.jsx'
import RestaurantPage from './components/RestaurantPage.jsx'
const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path:'/',
        element: <Dash/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/restaurant/:id',
        element: <RestaurantPage/>
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
  
)
