import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import Home from './screeen/Home';
import About from './screeen/About';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
          <Route index={true} path='/' element={<Home/>}/>
          <Route index={true} path='/about-us' element={<About/>}/>
          <Route index={true} path='/portfolio' element={<About/>}/>
          <Route index={true} path='/contact-us' element={<About/>}/>
      </Route>
    )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
