import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import bg from '../../../assests/bg.png';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import icn1 from '../../../assests/icon1.png';
import icn2 from '../../../assests/icon2.png';
import icn3 from '../../../assests/icon3.png';
import icn4 from '../../../assests/icon4.png';
import { Link } from 'react-router-dom'


const MyComponent = () => {
  return (
    <>


      <img style={{ height: '110vh', width: '100%', objectFit: 'cover', position: 'relative' }} src={bg} alt="" />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '110vh',
          background: 'rgba(0, 0, 0, 0.7)',
        }}
      >

        <div className="container-fluid p-3">
        <nav class="navbar bg-dark bg-opacity-25 ">
        <div class="container-fluid">
          <Link to='/home' style={{
            fontSize: '2rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#e50914'
          }}
            className="navbar-brand">CINEMATE</Link>
          {/* <div class="d-flex" >
            <button
              style={{ backgroundColor: '#9D161D' }}
              class="btn btn-outline" ><Link to='/register' style={{ textDecoration: 'none', color: '#fff', lineHeight: '14px', fontWeight: '500' }}>Sign Up</Link></button>
          </div> */}
        </div>
      </nav>
        </div>

      </div>


      <Grid container spacing={3} style={{ position: 'absolute', top: '39%' }}>
        <Grid item xs={12} md={6} lg={6} className="mx-5">
          <h1 style={{ fontSize: '56px', lineHeight: '84px', margin: '0px 0px 16px', fontWeight: 900 }}>
            Unlimited movies, TV shows, and more
          </h1>
          {/* <p style={{ fontSize: '20px', margin: '0px 0px 32px', fontWeight: 500 }}>
            Starts at EGP 70. Cancel anytime.
          </p> */}
          <Link to='/home'>
          <Button
            variant="outlined"
            size="large"
            style={{
              color: '#fff',
              backgroundColor: '#AB141B',
              fontSize: '24px',
              lineHeight: '24px',
              padding: '12px 24px',
              fontWeight: '500',
            }}
          >
            Explore
          </Button>

          </Link>
        </Grid>
      </Grid>

      <div className="container my-5">
        <h2 style={{ fontSize: '24px', fontWeight: '500' }}>A Plan To Suit Your Needs</h2>
        <Grid container spacing={3}>
          {/* First Card */}
          <Grid item lg={4} xs={12} md={12} s={12}>
            <Card
              sx={{
                minWidth: 275,
                marginTop: '30px',
                backgroundColor: '#5F1C38',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
                }}
              />
              <CardContent>
                <Typography style={{ color: '#fff', paddingTop: '5px' }} variant="h5" component="div">
                  BASIC
                </Typography>
                <Typography className="text-white-50" sx={{ fontSize: 18, paddingTop: '20px' }} gutterBottom>
                  A great way to enjoy all your favorite shows and movies on a budget.
                </Typography>
                <p className="py-2 text-white">EGP 70/month</p>
              </CardContent>
            </Card>
          </Grid>

          {/* Second Card */}
          <Grid item lg={4} xs={12} md={12} s={12}>
            <Card
              sx={{
                minWidth: 275,
                marginTop: '30px',
                backgroundColor: '#5F1C38',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
                }}
              />
              <CardContent>
                <Typography style={{ color: '#fff', paddingTop: '5px' }} variant="h5" component="div">
                  STANDARD
                </Typography>
                <Typography className="text-white-50" sx={{ fontSize: 18, paddingTop: '20px' }} gutterBottom>
                  All the entertainment you love, in Full HD video quality.
                </Typography>
                <p className="py-2 text-white">EGP 120/month</p>
              </CardContent>
            </Card>
          </Grid>

          {/* Third Card */}
          <Grid item lg={4} xs={12} md={12} s={12}>
            <Card
              sx={{
                minWidth: 275,
                marginTop: '30px',
                backgroundColor: '#5F1C38',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
                }}
              />
              <CardContent>
                <Typography style={{ color: '#fff', paddingTop: '5px' }} variant="h5" component="div">
                  PREMIUM
                </Typography>
                <Typography className="text-white-50" sx={{ fontSize: 18, paddingTop: '20px' }} gutterBottom>
                  A cinematic experience with the best picture and audio quality.
                </Typography>
                <p className="py-2 text-white">EGP 165/month</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className="container my-5">
        <h2 style={{ fontSize: '24px', fontWeight: '500' }}>More Reasons to Join</h2>

        <Grid container spacing={3}>
          {/* First Card */}
          <Grid item lg={3} xs={12} md={6} sm={12}>
            <Card
              sx={{
                minWidth: 275,
                marginTop: '30px',
                backgroundColor: '#1C1A35',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                height: '290px',
              }}
            >
              {/* Overlay without affecting the image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(31, 18, 32, 1))',
                  pointerEvents: 'none', // Ensure the overlay doesn't interfere with the image
                }}
              />

              {/* Image without overlay effect */}
              <div className='d-flex justify-content-end position-relative'>
                <img
                  style={{
                    pointerEvents: 'none', // Make sure the image is not interactive
                    alignItems: 'end',
                    position: 'absolute',
                    top: 193,
                    padding: '15px',
                    borderRadius: '20px',
                    height: '90px',
                    width: '90px'


                  }}
                  src={icn1}
                  alt=""
                /></div>
              <CardContent>
                <Typography style={{ color: '#fff', paddingTop: '5px' }} variant="h5" component="div">
                  Enjoy on your TV
                </Typography>
                <Typography className="text-white-50" sx={{ fontSize: 18, paddingTop: '20px' }} gutterBottom>
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                </Typography>
                <br /><br />
                {/* <div className="d-flex justify-content-end"><img style={{ height: '65px', width: '65px' }} src={icn1} alt="" /></div> */}
              </CardContent>
            </Card>
          </Grid>

          {/* Second Card */}
          <Grid item lg={3} xs={12} md={6} sm={12}>
            <Card
              sx={{
                minWidth: 275,
                marginTop: '30px',
                backgroundColor: '#1C1A35',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                height: '290px',

              }}
            >
              {/* Overlay without affecting the image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(31, 18, 32, 1))',
                  pointerEvents: 'none', // Ensure the overlay doesn't interfere with the image
                }}
              />

              {/* Image without overlay effect */}
              <div className='d-flex justify-content-end position-relative'>
                <img
                  style={{
                    pointerEvents: 'none', // Make sure the image is not interactive
                    alignItems: 'end',
                    position: 'absolute',
                    top: 193,
                    padding: '15px',
                    borderRadius: '40px',
                    height: '80px',
                    width: '80px'

                  }}
                  src={icn2}
                  alt=""
                /></div>
              <CardContent>
                <Typography style={{ color: '#fff', paddingTop: '5px' }} variant="h5" component="div">
                  Download your shows to watch offline
                </Typography>
                <Typography className="text-white-50" sx={{ fontSize: 18, paddingTop: '20px' }} gutterBottom>
                  Save your favorites easily and always have something to watch.
                </Typography>
                <br /><br />
                {/* <div className="d-flex justify-content-end"><img style={{ height: '65px', width: '65px' }} src={icn2} alt="" /></div> */}
              </CardContent>
            </Card>
          </Grid>

          {/* Third Card */}
          <Grid item lg={3} xs={12} md={6} sm={12}>
            <Card
              sx={{
                minWidth: 275,
                marginTop: '30px',
                backgroundColor: '#1C1A35',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                height: '290px',

              }}
            >              {/* Overlay without affecting the image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(31, 18, 32, 1))',
                  pointerEvents: 'none', // Ensure the overlay doesn't interfere with the image
                }}
              />

              {/* Image without overlay effect */}
              <div className='d-flex justify-content-end position-relative'>
                <img
                  style={{
                    pointerEvents: 'none', // Make sure the image is not interactive
                    alignItems: 'end',
                    position: 'absolute',
                    top: 193,
                    padding: '15px',
                    borderRadius: '40px',
                    height: '90px',
                    width: '90px'


                  }}
                  src={icn3}
                  alt=""
                /></div>

              <CardContent>
                <Typography style={{ color: '#fff', paddingTop: '5px' }} variant="h5" component="div">
                  Watch everywhere
                </Typography>
                <Typography className="text-white-50" sx={{ fontSize: 18, paddingTop: '20px' }} gutterBottom>
                  Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </Typography>
                <br /><br />
                {/* <div className="d-flex justify-content-end"><img style={{ height: '65px', width: '65px' }} src={icn3} alt="" /></div> */}
              </CardContent>
            </Card>
          </Grid>


          {/* 4 Card */}
          <Grid item lg={3} xs={12} md={6} sm={12}>
            <Card
              sx={{
                minWidth: 275,
                marginTop: '30px',
                backgroundColor: '#1C1A35',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                height: '290px',
              }}
            >
              {/* Overlay without affecting the image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(31, 18, 32, 1))',
                  pointerEvents: 'none', // Ensure the overlay doesn't interfere with the image
                }}
              />

              {/* Image without overlay effect */}
              <div className='d-flex justify-content-end position-relative'>
                <img
                  style={{
                    pointerEvents: 'none', // Make sure the image is not interactive
                    alignItems: 'end',
                    position: 'absolute',
                    top: 193,
                    padding: '15px',
                    borderRadius: '40px',
                    height: '90px',
                    width: '90px'


                  }}
                  src={icn4}
                  alt=""
                /></div>

              <CardContent>
                <Typography style={{ color: '#fff', paddingTop: '5px' }} variant="h5" component="div">
                  Create profiles for kids
                </Typography>
                <Typography className="text-white-50" sx={{ fontSize: 18, paddingTop: '20px' }} gutterBottom>
                  Send kids on adventures with their favorite characters in a space made just for them — free with your membership.
                </Typography>
                <br />

                {/* <div className="d-flex justify-content-end"><img style={{ height: '65px', width: '65px' }} src={icn4} alt="" /></div> */}
              </CardContent>
            </Card>
          </Grid>

        </Grid>




      </div>
    </>
  );
};

export default MyComponent;
