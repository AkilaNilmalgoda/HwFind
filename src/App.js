import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/layouts/navbar'
import GithubState from './context/HwfindState'
import HW from './components/HWs/HW'
import Spinner from './components/layouts/Spinner'

function App() {
  const [loading, setLoading] =useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },5000)
  },[])

  return (
    
    <GithubState>
      {loading ? <Spinner/>
      : <Router>
      <div className="contain">
        <Navbar/> 
        <Switch> 
          <Route exact path='/' component={Home}/>
          <Route exact path='/HW/:title' component={HW}/>
        </Switch>
      </div>
    </Router>
    }
    
    </GithubState>
  );
}

export default App;
