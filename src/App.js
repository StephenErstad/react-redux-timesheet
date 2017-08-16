import React, {Component} from 'react';

import Projects from './components/projects/Projects';
import Employees from './components/employees/Employees';
import Timesheets from './components/timesheets/Timesheets';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {

  // TODO - actually implement this for realz
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/projects" component={Projects}/>
              <Route exact path="/employees" component={Employees}/>
              <Route path="/employees/:user_id/timesheets"
                     component={Timesheets}/>
              <Redirect to="/employees"/>
            </Switch>

          </div>
        </BrowserRouter>
    );
  }
}

export default App;
