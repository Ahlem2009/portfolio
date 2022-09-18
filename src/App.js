import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import SkillDetails from './pages/SkillDetails'

function App() {
  return (
    <div >
      <BrowserRouter>
        < Navbar />
        < div className='container mt-5'>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route path="/skills/:id" component={SkillDetails} />
            <Route path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;