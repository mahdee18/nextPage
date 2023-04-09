import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Books from './components/Books/Books';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import BookDetails from './components/Books/BookDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new")
      
      },
      {
        path: "book/:id",
        element: <BookDetails/>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
