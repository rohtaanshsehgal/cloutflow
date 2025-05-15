import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from './dashboard';


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <Routes>
      <Route path="/" element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
)
