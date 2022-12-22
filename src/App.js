import { Link, Route, Routes } from "react-router-dom"
import { siteRoutes } from "./router/siteRoutes"


function App() {

  return <>
    <div>
      <h1>Site Header</h1>
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/users'>Users</Link></li>

      </ul>
    </div>
    <hr></hr>
    {/* Dinamik alan */}
    <Routes>
      {
        siteRoutes.map((item) => {
          return <Route path={item.path} element={item.element}></Route>
        })
      }

    </Routes>
    <hr></hr>
    <div>
      <h1>Site Footer</h1>
    </div>
  </>
}



export default App