import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Joblisting from './pages/Joblisting.js';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import StudentDashboard from './pages/StudentDashboard';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Form from './pages/Form.js';
import Admin from './pages/Admin.js';
import AdminStudentManagement from './pages/AdminStudentManagement.js';
import AdminCompanyManagement from './pages/AdminCompanyManagement.js';
import Company from './pages/Company.js';
const router = createBrowserRouter([{
  path:"/",
  element:<App></App>,
  children:[
    {
    path:"/",
    element:<Home></Home>

  },
  {
    path:"about",
    element:<About/>

  },
   {
    path:"admin",
    element:<Admin/>

  },
  {
    path:"contact",
    element:<Contact/>

  },
  {
    path:"login",
    element:<Login></Login>

  },
{
    path:"register",
    element:<Register/>

  },
  {
    path:"student",
    element:<StudentDashboard/>

  },
   {
    path:"companies",
    element:<Company/>

  },
   {
        path: "jobs",
        element: <Joblisting />
      },
        {
        path: "contactform",
        element: <Form/>
      },
      { path: 'students', element: <AdminStudentManagement /> },
      { path: 'companies', element: <AdminCompanyManagement /> },

]

}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
reportWebVitals();
