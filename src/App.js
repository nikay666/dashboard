import './App.scss';
import { UserMenu } from './modules/UserMenu';
import Dashboard from './Pages/Dashboard';
import AllCouses from './Pages/AllCourses';
import Resources from './Pages/Resources';
import Chats from './Pages/Chats';
import Friends from './Pages/Friends';
import Settings from './Pages/Settings';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faCamera, faChevronDown, faCog, faColumns, faCommentAlt, faCube, faFolder, faPalette, faPen, faPlay, faSearch, faSignOutAlt, faSmile, faSnowflake, faThLarge, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Profile } from './modules/Profile';
import {user} from './utilits'
import { TopPanel } from './modules/TopPanel';

library.add(faColumns, faThLarge, faFolder, faUser, faCommentAlt, faCog, faPen, faSmile, faCamera, faPalette, faCube, faChevronDown, faSignOutAlt, faSearch, faTimes, faBell, faSnowflake, faPlay)

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

const tabs = [
  { title: 'Ongoing'},
  { title: 'Favorite'},
  { title: 'Complete' },
]


const menuList = [
  {link: `/dashboard`, text: 'Dashboard', icon: "columns"},
  {link: '/all', text: 'All courses',icon: "th-large" },
  {link: '/resources', text: 'Resources', icon: 'folder'},
  {link: '/friends', text: 'Friends', icon: 'user'},
  {link: '/chats', text: 'Chats', icon: 'comment-alt'},
  {link: '/settings', text: 'Settings', icon: 'cog'}
]





function App() {
  return (
    <Router>
      <div className="App">
        <UserMenu menuList={menuList} />
        <Route exact path={['/', '/dashboard']}>
           <Redirect to={`/dashboard`} /> 
        </Route>
        <main className='main'>
          <TopPanel list={listNotification}/>
          <Switch>
            <Route exact path='/dashboard' render={(props) => <Dashboard tabs={tabs}/>} />
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
