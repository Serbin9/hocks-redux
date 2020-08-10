import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Above from './pages/Above';
import NAvbar from './component/NAvbar';
import Alert from './component/Alert';
import AlertState from './context/alert/AlertState';
import { FireBaseState } from './context/firebase/FireBAseState';

const App = () => {
  return(
    <FireBaseState>
    <AlertState>
    <BrowserRouter>
    <NAvbar/>
    <div>
      <Alert/>
    <Switch>
      <Route path={"/"} exact component={Home}/>
      <Route path={"/above"} component={Above}/>
    </Switch>
    </div>
  
    </BrowserRouter>
    </AlertState>
    </FireBaseState>
  )
}

export default App;