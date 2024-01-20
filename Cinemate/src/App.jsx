// import { Route, Routes, BrowserRouter, createBrowserRouter } from "react-router-dom"
// import './App.css'
// import Login from './Pages/Login'
// import Welcome from './Pages/Welcome'
// import Register from './Pages/Register'
// import Home from './Pages/Home'
// import WatchList from './Pages/WatchList'
// import NotFound from './Pages/NotFound'
// import Details from './Pages/Details'
// import { jwtDecode } from "jwt-decode"
// import { useState, useEffect } from "react"
// // import MasterLayout from './components/Navbar/MasterLayout/MasterLayout'
// import Logout from './Pages/Logout'
// import TVShows from './Pages/TVShows'
// import Movies from './Pages/Movies'
// import Navbar from "./components/Navbar/Navbar"
// import Profile from "./Pages/Profile"
// import Support from "./Pages/Support"
// function App() {

//   const [newData, setNewData] = useState(null)

//   const [userData, setUserData] = useState(null)
//   useEffect(() => {
//     setNewData(userData)

//     console.log("Updated userData:", userData);
//   }, [userData]);

//   let saveUserData = ()=>{
//     let encodedToken = localStorage.getItem('token');
//     let decodedToken = jwtDecode(encodedToken)
//     setUserData(decodedToken);
//     // console.log(userData);
//   }
  


//   return (
//     <>
    
//     <BrowserRouter>
//       <Routes>
//         <Route errorElement={<NotFound />} />

//         {/* <Route element={<MasterLayout userData={userData} />} /> */}
//         <Route  element={<Navbar userData={newData} />} />


//         <Route path="/login" element={<Login saveUserData={saveUserData} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/logout" element={<Logout />} />



//         <Route path="/watchlist" element={<WatchList />} />
//         <Route path="/details/:id" element={<Details />} />

//         <Route path="/tvshows" element={<TVShows />} />
//         <Route path="/movies" element={<Movies />} />

//         <Route path="/manage-profile" element={<Profile />} />
//         <Route path="/help-and-support" element={<Support />} />




//         <Route path="/" element={<Welcome />} />
//         <Route path="/home" element={<Home />} />


//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
// import Login from './Pages/Login';
import Welcome from './Pages/Welcome';
// import Register from './Pages/Register';
import Home from './Pages/Home';
import WatchList from './Pages/WatchList';
import NotFound from './Pages/NotFound';
import Details from './Pages/Details';
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
// import Logout from './Pages/Logout';
import TVShows from './Pages/TVShows';
import Movies from './Pages/Movies';
import Profile from "./Pages/Profile";
import Support from "./Pages/Support";
import People from "./Pages/People";

function App() {
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   decodeAndSetUserData(); // Initial decoding when the component mounts
  // }, []);

  // const decodeAndSetUserData = async () => {
  //   const encodedToken = localStorage.getItem('token');
  //   if (encodedToken) {
  //     const decodedToken = await jwtDecode(encodedToken);
  //     setUserData(decodedToken);
  //     console.log("Updated userData:", decodedToken);
  //   }
  // };
  
  // const saveUserData = () => {
  //   decodeAndSetUserData(); // Call this function when needed to update user data
  // };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route errorElement={<NotFound />} />

          {/* <Route element={<Navbar userData={userData} />} /> */}

          {/* <Route path="/login" element={<Login saveUserData={saveUserData} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} /> */}

          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/details/:id" element={<Details />} />

          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/manage-profile" element={<Profile />} />
          <Route path="/help-and-support" element={<Support />} />

          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/people" element={<People />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

