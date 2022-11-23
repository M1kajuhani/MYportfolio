import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.module.scss';
import Navbar from './components/navbar/navbar';
import Project from './components/project';
import CV from './components/cv';
import Footer from './components/Footer/footer';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
   <Navbar />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='cv' element={<CV />} />
      <Route path='project' element={<Project />} />
    </Routes>
    <Footer />
  </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
