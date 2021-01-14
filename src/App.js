import './App.scss';
import { UserMenu } from './modules/UserMenu';
import Dashboard from './Pages/Dashboard';
import AllCouses from './Pages/AllCourses';
import Resources from './Pages/Resources';
import Chats from './Pages/Chats';
import Friends from './Pages/Friends';
import Settings from './Pages/Settings';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <UserMenu/>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/all' component={AllCouses} />
          <Route exact path='/resources' component={Resources} />
          <Route exact path='/friends' component={Friends} />
          <Route exact path='/chats' component={Chats} />
          <Route exact path='/settings' component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
