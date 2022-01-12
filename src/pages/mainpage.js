import * as React from "react";
import { useMediaQuery } from 'react-responsive';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

//require('./components/mainpage.css')

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
}

const title ={
  display: "flex",
  width: "100%",
  justifyContent: "space-between"
}

const logo = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  flexWrap: "nowrap"
}

const title1 ={
  alignSelf: "flex-start",
  marginLeft: 20
}

const title2 ={
  alignSelf: "center"
}

const navlist = {
  display: "flex",
}
const tabs = {
  marginLeft: 10,
  listStyleType: "none"
}

const colone = {
  display: "flex",
  flexWrap: "wrap-reverse",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FAFBFA",
  width: "100%",
  left: 0,
  overflow: "hidden"
}

const desc = {
  flex: 1,
  marginLeft: "10%",
  marginRight: "10%",
  fontSize: "200%"
}
const image = {
  flex: 2,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
}

const coltwo ={
  display: "flex",
  justifyContent: "center"
}

const tit ={
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const colrow = {
  margin: "5%",
  textAlign: "center"
}

const button = {
    border: 0,
    marginLeft: 20,
    width: 200,
    height: 50,
    backgroundColor: "#54C9CC",
    color: "white",
}

//drawer
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



// markup
const MainPage = () => {


  //media Queries
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 666px)' })

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleHome = () => {
    window.open("./mainpage");
  };

  const handleAbout = () => {
    window.open("./about");
  };

  const handleFree = () => {
    window.open("./free");
  };

  const handleContact = () => {
    window.open("./contact");
  };

  const handleBlog = () => {
    window.open("./blog");
  };

  return (
    <Box>
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem button key="home" onClick={handleHome}>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleAbout}>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary="About me"/>
            </ListItem>
            <ListItem button onClick={handleFree}>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary="Freebies"/>
            </ListItem>
            <ListItem button onClick={handleBlog}>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary="Blog"/>
            </ListItem>
            <ListItem button onClick={handleContact}>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary="Contact"/>
            </ListItem>
        </List>
      </Drawer>
    
    <main style={pageStyles}>
      <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <title>Home Page</title>
      <div style={title}>
          <div style={title1}>
          <div style={logo}>
            <img
              alt="Gatsby G Logo"
              src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
            <h1>Kelaridis</h1>
            Psychologische Beratung & Coaching
          </div>
        </div>
        {isTabletOrMobile 
        ? 
        <div style={title2}>

          <List style={navlist}>
            <ListItem style={tabs} button key="home" onClick={handleHome}>
                <ListItemText primary="Home"/>
              </ListItem>
            <ListItem  style={tabs} button onClick={handleAbout}>
                <ListItemText primary="About"/>
              </ListItem>
              <ListItem  style={tabs} button onClick={handleFree}>
                <ListItemText primary="Freebies"/>
              </ListItem>
              <ListItem style={tabs} button onClick={handleBlog}>
                <ListItemText primary="Blog"/>
              </ListItem>
              <ListItem  style={tabs} button onClick={handleContact}>
                <ListItemText primary="Contact"/>
              </ListItem>
          </List>
        </div> 
        : <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >   
          <MenuIcon />
          </IconButton>}
        
        
      </div>

      <div style={colone}>
        <div style={desc}>
          <h1 style={headingStyles}>
            Hi, Welcome!
            <br />
            <span style={headingAccentStyles}> Grade is good at explaining what I am doing </span> <br/>
            <button style={button}>Book an appointment</button>
          </h1>
        </div>
        <img style={image}
        alt="Gatsby G Logo"
        src="https://media.istockphoto.com/photos/lifes-about-the-moments-that-made-you-smile-picture-id1158818161?b=1&k=20&m=1158818161&s=170667a&w=0&h=Y2Sw7SmktZjuerGgQ1ZLN5jbeVjqwu4hoS7uFmCYFjY="
        />
      </div>

      <div style={coltwo}>
        <div style={colrow}>
          <h1 style={tit}>
            20
          </h1>
          Years of experience
        </div>
        <div style={colrow}>
          <h1 style={tit}>
            4000+
          </h1>
          happy cases
        </div>
        <div style={colrow}>
          <h1 style={tit}>
            15
          </h1>
          Awards Achieved
        </div>
      </div>
    </main>
    </Box>
  )
}

export default MainPage
