import './App.scss';
import { UserMenu } from './modules/UserMenu';
import Dashboard from './Pages/Dashboard';
import AllCouses from './Pages/AllCourses';
import Resources from './Pages/Resources';
import Chats from './Pages/Chats';
import Friends from './Pages/Friends';
import Settings from './Pages/Settings';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faCamera, faChevronDown, faCog, faColumns, faCommentAlt, faCube, faFolder, faPalette, faPen, faSearch, faSignOutAlt, faSmile, faSnowflake, faThLarge, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Profile } from './modules/Profile';
import {user} from './utilits'
import { TopPanel } from './modules/TopPanel';

library.add(faColumns, faThLarge, faFolder, faUser, faCommentAlt, faCog, faPen, faSmile, faCamera, faPalette, faCube, faChevronDown, faSignOutAlt, faSearch, faTimes, faBell, faSnowflake)

const listNotification = [
  {
    title: 'How are you? We have a new courses special for you 👩🏻‍💻❤️',
    subtitle: 'Start on 27 Oct 2020, Tuesday',
    icon: 'bell',
    color: 'primary'
  },
  {
    title: 'Winter Sale ❄️',
    subtitle: 'For 14 to 25 Jan',
    icon: 'snowflake',
    color: 'secondary'
  }
]


function App() {
  return (
    <Router>
      <div className="App">
        <UserMenu/>
        <Route exact path="/">
           <Redirect to="/dashboard" /> 
        </Route>
        <main className='main'>
          <TopPanel list={listNotification}/>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/all' component={AllCouses} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/friends' component={Friends} />
            <Route exact path='/chats' component={Chats} />
            <Route exact path='/settings' component={Settings} />
          </Switch>
        </main>
        <Profile user={user}/>
      </div>
    </Router>
  );
}

export default App;
