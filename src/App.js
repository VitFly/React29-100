import './App.css';

import  Profile from './Components/Profile/profile';
import  Header from './Components/Header/header';
import  Nav from './Components/Nav/nav';
import  Dialogs from './Components/Dialogs/Dialogs'
import  News from './Components/News/News'
import  Music from './Components/Musicc/Music'
import  Settings from './Components/Settingss/Settings'
import  AboutUs from './Components/AboutUs/AboutUs';

import {Route} from 'react-router-dom'
import Friends from './Components/Friends/Friends';

const App = (props)  => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
          <div className='App__wrapper__content'>   

            <Route path='/profile' render={ () => <Profile mypost={props.State.StatePosts.poste} addPost={props.addPost} /> }/> 
            <Route path='/dialogs' render={ () => <Dialogs dialogs={props.State.StateDialogs.dialog} message={props.State.StateDialogs.message} /> }/>

            
            <Route path='/news' component={News}/> 
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/aboutus' component={AboutUs}/>
            <Route path='/friends' component={Friends}/>
          </div>
      </div> 
  );
}


export default App;

