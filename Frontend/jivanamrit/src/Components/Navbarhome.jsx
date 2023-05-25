// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../Images/jivanamrit.png'
// import './Navbar.css'

// // import NavLink from 'react-bootstrap/esm/NavLink';
// import {  NavLink} from "react-router-dom";

// function Navbarhome () {
//   return (
//     <Navbar className='navbar' collapseOnSelect expand="lg" bg="" variant="dark">
//       <Container>

//         {/* <Navbar.Brand href="#home"> 

//         <img src={logo} width={"100px"} height={"80px"}
//         alt="Logo" />

//         </Navbar.Brand> */}

//    <Nav.Link href="#pricing"><img className='logo' src={logo} width={"140px"} height={"135px"}
//         alt="Logo" /></Nav.Link>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">

//           <Nav className="me-auto navtag">
//             <Nav.Link href="#features">About</Nav.Link>

      
//          <Nav.Link to="/home">Home</Nav.Link>
   
            

//             <Nav.Link href="#E">Events</Nav.Link>
//             <NavDropdown title="Gallery" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Videos</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                Media
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#"> </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           <Nav className='navtag'>
//             <Nav.Link href="#portfolio">Portfolio</Nav.Link>
//             <Nav.Link href="#blogs">Blogs</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navbarhome;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../Images/jivanamrit.png'
import './Navbar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
// import Container from 'react-bootstrap/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import BookIcon from '@mui/icons-material/Book';
import CollectionsIcon from '@mui/icons-material/Collections';
import InfoIcon from '@mui/icons-material/Info';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { NavLink } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Home', 'About', 'Events', 'Logout'];

function Navbarhome() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

<>
   <div className="logodiv"> 

      <div className='logoimageNav'> <img src={logo} width={"100px"}/></div>


       <div className='lines' >
        {/* <h5>Ayurveda for wellbeing,<br></br> Serving the nation since 1968.</h5> */}
       <div> <HomeIcon fontSize="large" color="primary"/></div>
        
        <div>  <ContactPageIcon fontSize="large" color="primary"/></div>
        <div> <BookIcon fontSize="large" color="primary"/></div>
        <div>      <CollectionsIcon fontSize="large" color="primary"/></div>
       <div><CelebrationIcon fontSize="large" color="primary"/></div>  
    <div><InfoIcon fontSize="large" color="primary"/></div>
        </div>





      <div className='socialmediaiconnav'>



<a href='' target='_blank'><InstagramIcon fontSize="large" sx={{ color: "red"}}/></a>
<a href="" target='_blank'><FacebookIcon fontSize="large" color="primary"/>
    </a>
    
    <a href="" target='_blank'><YouTubeIcon fontSize="large" sx={{ color: "red"}} /></a>
    <a href="" target='_blank'><LinkedInIcon fontSize="large" color="primary" /></a>
    <a href="" target='_blank'><TwitterIcon fontSize="large" color="primary" /></a>
      </div>


   </div>
       
      


    <AppBar  position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
        {/* <img src={logo} width={"100px"} alt='logo'/> */}



          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {
              pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                

                 <Typography textAlign="center">{page}</Typography>

                </MenuItem>
              ))} */}


<MenuItem onClick={handleCloseNavMenu}>
    
                <Typography textAlign="center">  <HomeIcon fontSize="large" color="primary"/> Home</Typography>

               </MenuItem>

               <MenuItem onClick={handleCloseNavMenu}>
    
                <Typography textAlign="center"><InfoIcon fontSize="large" color="primary"/> About </Typography>

               </MenuItem>
               <MenuItem onClick={handleCloseNavMenu}>
    
                <Typography textAlign="center"> <CollectionsIcon fontSize="large" color="primary"/> Gallery</Typography>

               </MenuItem>
               <MenuItem onClick={handleCloseNavMenu}>
    
                <Typography textAlign="center"> <ContactPageIcon fontSize="large" color="primary"/> Contact</Typography>
               </MenuItem>         

            </Menu>
          </Box>

       

       
          <Box className='bluenavbar' sx={{color:"#22a3a5", flexGrow: 1, display: { xs: 'none', md: 'flex' }, width:"100%" }}>
        

          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 0, color: 'white', display: 'block' }} > 
              </Button>


                 <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' }} > 
              </Button>

            <NavLink to='/'>  <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block', fontWeight:"bolder" }} > Home
              </Button></NavLink>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' }} > 
              </Button>

              

           <NavLink to='/about'>   <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block', fontWeight:"bolder" }} > About
              </Button></NavLink>


              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' }} > 
              </Button>

              
            <NavLink to='/contact'>  <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' , fontWeight:"bolder"}} > Contact
              </Button></NavLink>


              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block', fontWeight:"bolder" }} > 
              </Button>

              
           <NavLink  to='/events'>   <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block', fontWeight:"bolder" }} >  Events
              </Button></NavLink>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' }} > 
              </Button>

           <NavLink to='/blogs'><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block', fontWeight:"bolder" }} >Blogs
              </Button>
</NavLink>
              
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' }} > 
              </Button>


             <NavLink to='/gallery'> <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' , fontWeight:"bolder"}} >Gallery
              </Button></NavLink>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block',  }} >
              </Button>

            <NavLink to='/portfolio'>  <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block', fontWeight:"bolder" }} > Portfolio
              </Button></NavLink>


          </Box>

       
        </Toolbar>
      </Container>
    </AppBar>

    </>
  );
}
export default Navbarhome;
