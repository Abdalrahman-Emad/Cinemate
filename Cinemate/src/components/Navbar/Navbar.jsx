// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styles from './Navbar.module.scss';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

// export default function Navbar({ userData }) {
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     console.log("Updated userData:", userData);
//   }, [userData]);

//   const handleAvatarClick = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleLogout = () => {
//     // Implement your logout logic here
//     console.log("Logout clicked");
//     setShowDropdown(false);
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg ${styles.bgNavbar}`}>
//       <div className="container-fluid">
//         <Link className="navbar-brand px-3" to="/home">Cinemate</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-5 mb-lg-0">
//             <li className="nav-item px-3">
//               <Link className="nav-link" to='/home'>Home</Link>
//             </li>
//             <li className="nav-item px-3">
//               <Link className="nav-link" to='/movies'>Movies</Link>
//             </li>
//             <li className="nav-item px-3">
//               <Link className="nav-link" to='/tvshows'>TV Shows</Link>
//             </li>
//           </ul>

//           {userData ? (
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleAvatarClick}>
//                   <Stack direction="row" spacing={2}>
//                     <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//                   </Stack>
//                 </a>
//                 {showDropdown && (
//                   <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="navbarDropdown">
//                     <li><Link className="dropdown-item" to="/manage-profile">Manage Profile</Link></li>
//                     <li><Link className="dropdown-item" to="/help-and-support">Help & Support</Link></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li onClick={handleLogout} className="cursor-pointer"><span className="dropdown-item">Logout</span></li>
//                   </ul>
//                 )}
//               </li>
//             </ul>
//           ) : (
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" to='/login'>Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to='/register'>Register</Link>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Navbar() {
  // const [showDropdown, setShowDropdown] = useState(false);

  // useEffect(() => {
  //   console.log("Updated userData:", userData);
  // }, [userData]);

  // useEffect(() => {
  //   // This will run when the userData prop changes
  //   if (userData !== undefined) {
  //     console.log("Updated userData in effect:", userData);
  //   }
  // }, [userData]);

  // const handleAvatarClick = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // const handleLogout = () => {
  //   // Implement your logout logic here
  //   console.log("Logout clicked");
  //   setShowDropdown(false);
  // };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.bgNavbar}`}>
      <div className="container-fluid">
        <Link className="navbar-brand px-3" to="/home">Cinemate</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-5 mb-lg-0">
            <li className="nav-item px-3">
              <Link className="nav-link" to='/home'>Home</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to='/movies'>Movies</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to='/tvshows'>TV Shows</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to='/people'>Cast</Link>
            </li>

          </ul>

           {/* (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleAvatarClick}>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  </Stack>
                </a>
                {showDropdown && (
                  <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/manage-profile">Manage Profile</Link></li>
                    <li><Link className="dropdown-item" to="/help-and-support">Help & Support</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li className="cursor-pointer"><span className="dropdown-item">Logout</span></li>
                  </ul>
                )}
              </li>
            </ul>
          ) : ( */}
            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/register'>Register</Link>
              </li>
            </ul> */}
          
        </div>
      </div>
    </nav>
  );
}

