// import React, { useState } from 'react';
// import Navbar from '../components/Navbar/Navbar';
// import bg from '../../../assests/bg.png';
// import { Box, Button, TextField, Typography, Container, Grid } from "@mui/material";
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import joi from 'joi';


// export default function Register() {

//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//     rePassword: '',
//     phone: '',
//   });

//   const [errorMsg, setErrorMsg] = useState('');
//   const [errorList, setErrorList] = useState([]);

//   const navigate = useNavigate();
//   // Declare goToLogin outside of submitFormData
//   const goToLogin = () => {
//     navigate('/login')
//   }


//   let submitFormData = async (e) => {
//     e.preventDefault();
//     let validationesponse = validateFormData();
//     console.log(validationesponse);
//     if (validationesponse.error) {
//       setErrorList(validationesponse.error.details)
//     }
//     else {
//       try {
//         let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', user);

//         if (data.message === 'success') {
//           goToLogin();

//         } else {
//           setErrorMsg(data.message);
//         }
//       }
//       catch (error) {
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           // that falls out of the range of 2xx
//           setErrorMsg(error.response.data.message || 'An error occurred while processing your request.');
//           console.error('Error response:', error.response.data);
//         } else if (error.request) {
//           // The request was made but no response was received
//           setErrorMsg('No response received from the server.');
//           console.error('No response received:', error.request);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           setErrorMsg('Error setting up the request.');
//           console.error('Error setting up the request:', error.message);
//         }
//       }
//     };

//   }



//   let validateFormData = () => {
//     const schema = joi.object({
//       name: joi.string().required().min(2).max(30),
//       email: joi.string().required().email({ tlds: { allow: ['com', 'net'] } }),
//       password: joi.string().required(),
//       rePassword: joi.string().required().valid(joi.ref('password')),
//       phone: joi.string().pattern(/^\d{10,}$/), // Adjust the pattern based on your phone number format
//     })
//     return schema.validate(user, { abortEarly: false });
//   }

//   let getInputValue = (e) => {
//     let myUser = { ...user };  // deep copy vs shallow copy
//     myUser[e.target.name] = e.target.value
//     setUser(myUser);

//   }

//   return (
//     <Container>
//       <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
//         <img style={{ height: '100%', width: '100%', objectFit: 'cover', position: 'absolute' }} src={bg} alt="" />

//         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)' }}>
//           <div className="p-3">
//             <Navbar />
//           </div>
//         </div>

//         <Grid item xs={12} md={6} lg={4} sx={{ p: 2, zIndex: '1' }}>
//           <Box component="form" onSubmit={submitFormData} sx={{ mt: 2, p: 5, backgroundColor: 'rgba(22,22,22,0.9)', borderRadius: '10px' }}>
//             <Typography variant="h4" sx={{ color: 'white', mb: 3 }}> <i>Register</i> </Typography>

//             {errorList.map((error, index) =>
//               <div key={index} className='alert alert-danger p-2'>{error.message}</div>
//             )}

//             {errorMsg ? <div className='alert alert-danger p-2'>{errorMsg}</div>
//               : ''}
              
//             <TextField
//               onChange={getInputValue}
//               autoFocus
//               fullWidth
//               id="name"
//               name="name"
//               label="Name"
//               InputProps={{
//                 style: {
//                   backgroundColor: "#fff",
//                   borderRadius: "10px",
//                   color: "black",
//                 },
//               }}
//             />

//             <TextField
//               onChange={getInputValue}
//               margin="normal"
//               fullWidth
//               id="email"
//               name="email"
//               label="Email"
//               type="email"
//               InputProps={{
//                 style: {
//                   backgroundColor: "#fff",
//                   borderRadius: "10px",
//                   color: "black",
//                 },
//               }}
//             />

//             <TextField
//               onChange={getInputValue}
//               margin="normal"
//               fullWidth
//               id="password"
//               name="password"
//               type="password"
//               label="Password"
//               InputProps={{
//                 style: {
//                   backgroundColor: "#fff",
//                   borderRadius: "10px",
//                   color: "black",
//                 },
//               }}
//             />

//             <TextField
//               onChange={getInputValue}
//               margin="normal"
//               fullWidth
//               id="rePassword"
//               name="rePassword"
//               type="password"
//               label="Re-enter Password"
//               InputProps={{
//                 style: {
//                   backgroundColor: "#fff",
//                   borderRadius: "10px",
//                   color: "black",
//                 },
//               }}
//             />

//             <TextField
//               onChange={getInputValue}
//               margin="normal"
//               fullWidth
//               id="phone"
//               name="phone"
//               type="phone"
//               label="Phone"
//               InputProps={{
//                 style: {
//                   backgroundColor: "#fff",
//                   borderRadius: "10px",
//                   color: "black",
//                 },
//               }}
//             />



//             <Button
//               disableElevation
//               type=""
//               sx={{ mt: 2, mb: 2, width: "100%", backgroundColor: '#E50914', color: '#fff' }}
//             >
//               Next
//             </Button>

//             <div className="my-2">
//               <Typography variant="body1" sx={{ color: '#737362' }}>
//                 Already have an account?{' '}
//                 <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
//               </Typography>
//             </div>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }
