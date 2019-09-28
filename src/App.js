import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Library from "./pages/Library";
import LoadingScreen from "./components/LoadingScreen";


function App() {
  const [loading, setLoading] = useState(true)

  useEffect( () =>{
    (() => {
        setTimeout(() => setLoading(false), 2000)
      }
    )()
  })
  return (
    <Fragment>
      {loading ?
       <LoadingScreen />
      :<Router>
        <Switch>
          <Route exact path={"/library"} component={Library}/>
          <Route path={"/"} component={Login}/>
        </Switch>
      </Router>
      }
    </Fragment>
  )
}

export default App;
