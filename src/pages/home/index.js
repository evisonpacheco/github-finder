import {useState} from 'react';
import {Header} from '../../components/header';
import background from '../../assets/background.svg';
import { KendoGrid } from '../../components/kendoGrid';

import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const handleGetData = async () => {
    
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();    
    
    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({avatar_url, name, bio, login});
      
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();
      
      if (newRepos.length > 0){
        console.log(newRepos);
        setRepos(newRepos);
        }  
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} 
        className="content__img" alt="background app" />
        <div className="informations">
          <div className="user">
            <input className="user__input" value={user} 
            onChange={event => setUser(event.target.value)} 
            name="user"  placeholder="@username" />
            <button className="user__button" onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? ( 
          <>
            <div className="profile">
            <img className="profile__img" src={currentUser.avatar_url}></img>
            <div>
              <h3 className="profile__title">{currentUser.name}</h3>
              <p className="profile__user">@{currentUser.login}</p>
              <p className="profile__description">{currentUser.bio}</p>
            </div>
          </div>
          <hr />
          </>
          ) : null}
          {repos?.length ? (
            <div className="repositories">
              <h4 className="repositories__title">Repositórios</h4>
              <KendoGrid repos={repos}/>
            </div>
          ) : null }
        </div>
      </div>
    </div>
  );
}

export default App;
