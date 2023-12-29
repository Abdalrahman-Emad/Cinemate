import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import bg from '../../../assests/bg.png';
import { Box, Button, TextField, Typography, Container, Grid } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login({saveUserData}) {


  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  }

  const [loading, setLoading] = useState(false);



  let submitFormData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', user);
      if (data.message === 'success') {
        localStorage.setItem('token',data.token);
        saveUserData()

        // Redirect to the home page
        navigate('/home');
      } else {
        setErrorMsg(data.message);
      }

      // Handle successful authentication
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized access:', error.response.data);
        setErrorMsg('Incorrect email or password');
      } else {
        console.error('Error:', error);
      }
    } finally {
      setLoading(false);
    }
  }




  const getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    setErrorMsg(''); // Clear error message on input change
  }

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <img style={{ height: '100%', width: '100%', objectFit: 'cover', position: 'absolute' }} src={bg} alt="" />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)' }}>
          <div className="p-3">
            <Navbar />
          </div>
        </div>
        <Grid item xs={12} md={6} lg={4} sx={{ p: 2, zIndex: '1' }}>
          <Box component="form" onSubmit={submitFormData} sx={{ mt: 2, p: 5, backgroundColor: 'rgba(22,22,22,0.9)', borderRadius: '10px' }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 3 }}> <i>Login</i> </Typography>

            {errorMsg ? <div className='alert alert-danger p-2'>{errorMsg}</div> : ''}


            <TextField
              onChange={getInputValue}
              autoFocus
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              aria-label="Email"  // Add aria-label for accessibility
              InputProps={{
                style: {
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  color: "black",
                },
              }}
            />
            <TextField
              onChange={getInputValue}
              margin="normal"
              fullWidth
              id="password"
              name="password"
              type="password"
              label="Password"
              InputProps={{
                style: {
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  color: "black",
                },
              }}
            />

            <Button
              disableElevation
              type="submit"
              disabled={loading}  // Disable the button during loading
              sx={{ mt: 2, mb: 2, width: "100%", backgroundColor: '#E50914', color: '#fff' }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            <div className="my-2">
              <Typography variant="body1" sx={{ color: '#737362' }}>
                Don't have an account?{' '}
                <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
