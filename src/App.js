import './App.css';

import  Profile from './Components/Profile/profile';
import  Header from './Components/Header/header';
import  Nav from './Components/Nav/nav';
import  Dialogs from './Components/Dialogs/Dialogs'
import  News from './Components/News/News'
import  Music from './Components/Musicc/Music'
import  Settings from './Components/Settingss/Settings'
import  AboutUs from './Components/AboutUs/AboutUs';

import {BrowserRouter, Route} from 'react-router-dom'

const App = (props)  => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
          <div className='App__wrapper__content'>   

            <Route path='/profile' render={ () => <Profile mypost={props.mypost} /> }/> 
            <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} message={props.message} /> }/>

            
            <Route path='/news' component={News}/> 
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/aboutus' component={AboutUs}/>
          </div>
      </div> 
    </BrowserRouter>
  );
}


export default App;

