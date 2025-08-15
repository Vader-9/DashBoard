import Default from './Dashboard/Default'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Overview from './Overview/Overview';
// <nav>
//   <Link to="/page1">Default</Link> | <Link to="/page2">Overview</Link>
//  </nav>

function App() {

  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route path="/page1" element={<Default />} />
          <Route path="/page2" element={<Overview />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
