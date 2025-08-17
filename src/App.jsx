import { useState } from 'react';
import Default from './Dashboard/Default'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Overview from './Overview/Overview';
import Nav from './Dashboard/Chart/Nav/Nav';

import Sidebar from './Sidebar/Sidebar';


function App() {



  return (
  <BrowserRouter>
   <div className='App'>
      <Sidebar />
       <div id='app'>
      <Nav />
         <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/page2" element={<Overview />} />
         </Routes>
      </div>
    </div>
   
  </BrowserRouter>
   

  )
}

export default App
