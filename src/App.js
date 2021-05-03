import './App.css';

import  Profile from './Components/Profile/profile';
import  Header from './Components/Header/header';
import  Nav from './Components/Nav/nav';
import  Dialogs from './Components/Dialogs/Dialogs'
import  News from './Components/News/News'
import  Music from './Components/Musicc/Music'
import  Settings from './Components/Settingss/Settings'

import {BrowserRouter, Route} from 'react-router-dom'

const App = ()  => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
          <div className='App__wrapper__content'>   
            <Route path='/profile' component={Profile}/> 
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/news' component={News}/> 
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
      </div> 
    </BrowserRouter>
  );
}


export default App;

