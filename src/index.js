import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Hot from './pages/hot';
// import Mat from './pages/mat';
// import Par from './pages/par';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Hot />,
//     errorElement: <h2>aaaaazazazaz</h2>,
//   },
//   {
//     path: "/mat",
//     element: <Mat />,
//   },
//   {
//     path: "/par",
//     element: <Par />,
//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
