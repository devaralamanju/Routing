import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './Routing/Home';
import About from './Routing/About';
import ContactUs from './Routing/ContactUs';
import Navigate from './Routing/Navigate';

function App(){
  return(
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Navigate/>}>
            <Route index element={<Home/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="ContactUs" element={<ContactUs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;