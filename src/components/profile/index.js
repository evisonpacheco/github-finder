import './styles.css'

export const Profile = (currentUser) => {
return (

<div className="profile">
  <img className="profile__img" src={currentUser.currentUser.avatar_url}></img>
  <div>
    <h3 className="profile__title">{currentUser.currentUser.name}</h3>
    <p className="profile__user">@{currentUser.currentUser.login}</p>
    <p className="profile__description">{currentUser.currentUser.bio}</p>
  </div>
  <hr />
</div>
)
  
}
