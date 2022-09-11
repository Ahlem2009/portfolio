import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

function App() {
  return (
    <div >
      <BrowserRouter>
      <h1> hello </h1>
    < Navbar />
      <Route path="/contact" component={Contact}  />
      <Route exact path="/" component={Home}  />
      <Route path="/projects" component={Projects}  />
      <Route path="/skills" component={Skills}  />
      </BrowserRouter>
     </div>
  );
}

export default App;