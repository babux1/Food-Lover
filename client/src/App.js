import React, { Fragment,} from 'react'; 
import './App.css'
import NavBar from './components/NavBar.js'
import { Route, Navigate, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './Pages/LandingPage.js'
import LoginPage from './Pages/LoginPage.js'
import RegisterPage from './Pages/RegisterPage.js'
import UserPage from './Pages/UserPage.js'
import DirectoryPage from './Pages/DirectoryPage.js'
import NotFoundPage from './Pages/NotFoundPage'



let FoodsURL = "http://localhost:3000/foods" 
let FavoriteURL = "http://localhost:3000/favorites"
let UsersURL = "http://localhost:3000/users"

class App extends React.Component{

  state = {
    currentUser: null,
    users: [],
    foods: [],
    searchText: "",
    limit: 0,
    filter: "All",
    userFavorite: [],
    hideShell: false
  }

  hideShell = (status) => {
    this.setState({hideShell: status})
  }

  setuserFavorite = (favorite) => {
    this.setState({
      currentUser: favorite,
      userFavorite: favorite.favorites
    })
  }

  assignContent = (foodContent, id) => {
    
 
    let foodFavorite = {
       content: foodContent
   };


  
   let reqPackage = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(foodFavorite)
    }

   fetch(FavoriteURL + id, reqPackage)
   .then(res => res.json())
   .then(newContent => {
     const copyOfFavorite= [...this.state.userFavorite]
       copyOfFavorite.map(favorite => {
         if(favorite.id === id) {
           favorite.content = foodContent
         }
         return favorite
       })
     
     this.setState({
         userFavorite: copyOfFavorite
     })
   })
}
  

  
  componentDidMount() {
    Promise.all([fetch(UsersURL), fetch(FoodsURL)])
    
    .then(([res1, res2]) => { 
      return Promise.all([res1.json(), res2.json()]) 
    })
    .then(([users, foods]) => {
      this.setState({users})
      this.setState({foods})

    });
    this.autoLogin()
  }

  
  backfoods = () => {
    this.setState({
      limit: this.state.limit - 8
    }) 
  }
  
  changeSearch = (text) => {
    this.setState({searchText: text})
  }


  filteredfoods = () => {
    let filteredfoods = this.state.foods.filter(food => food.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
  
    if (this.state.filter !== "All"){
      filteredfoods = filteredfoods.filter(food => food.category === this.state.filter)
    }
    return filteredfoods
  }
  
  deleteUserfood = (userfood) => {
    console.log(userfood)
    this.setState({userFavorite: this.state.userFavorite.filter((filteredfood) => filteredfood !== userfood)})
  }

  morefoods = () => {
    this.setState({
      limit: this.state.limit + 8
    }) 
  }

updateFilter = (filter) => {
  console.log(filter)
  this.setState({filter})
}

addTofavorite = (food) =>{

  let newfavoritefood = {
    food_id: food.id,
    user_id: this.state.currentUser.id,
    content: ""
  }

  let reqPack = {};
  reqPack.method = "POST";
  reqPack.headers = {"Content-Type": "application/json"};
  reqPack.body = JSON.stringify(newfavoritefood);

  fetch("http://localhost:3000/favorites", reqPack)
  .then(res => res.json())
  .then(data => this.setState({userFavorite:[data, ...this.state.userFavorite]})) 
}

  render()
  {
  return (
    <Fragment>
        
       {!this.state.hideShell &&  <NavBar logOut={this.logOut} currentUser={this.state.currentUser}/>}
        <Router/>
          <Route>
            <Route exact path="/" render={() => 
            <LandingPage hideShell={this.hideShell}/>
            }/>
            <Route exact path="/login" render={() => (
                  this.state.currentUser == null ? <LoginPage updateCurrentUser={this.updateCurrentUser} setuserFavorite={this.setuserFavorite} hideShell={this.hideShell}/> : <Navigate to="/user"/>
                )}/>
            <Route exact path="/register" render={() => <RegisterPage hideShell={this.hideShell}/>}/>
            <Route exact path="/user" render={() => 
              <UserPage 
                currentUser={this.state.currentUser} 
                userFavorite={this.state.userFavorite} 
                deleteUserfood={this.deleteUserfood} 
                setuserFavorite={this.setuserFavorite}
                hideShell={this.hideShell}
                assigncontent={this.assigncontent}
                />}/>
            <Route path="/directory" render={(props) => (
              <DirectoryPage 
                addTofavorite={this.addTofavorite} 
                currentUser={this.state.currentUser} 
                changeSearch={this.changeSearch} 
                morefoods={this.morefoods} 
                backfoods={this.backfoods} 
                foods={this.filteredfoods().slice(this.state.limit, this.state.limit + 8)}
                limit={this.state.limit}
                foodLength={this.state.foods.length}
                updateFilter={this.updateFilter}
                hideShell={this.hideShell}
              />
            )} />
            <Route component={NotFoundPage}/>
          </Route>
        <Router/>
    </Fragment>
  )
}}

export default App;