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

const Index : React.FC = () => {

  const isProduction = window.location.href.includes('m1kajuhani.github.io');

return(
  <React.StrictMode>
  <BrowserRouter basename={isProduction ? 'myportfolio' : ''}>
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
}

root.render(<Index />);
reportWebVitals();
