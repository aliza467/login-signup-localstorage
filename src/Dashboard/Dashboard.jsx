import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Dining } from '@mui/icons-material';
import { Card } from 'react-bootstrap';
import { productData } from '../../data';
import Cards from '../Cards';





const Dashboard = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button component={Link} to="/login" color="inherit">Login</Button>
          <Button component={Link} to="/signup" color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </Box><br /><br />
    

    {productData.map((e,i)=>{
      return(
        <div key={i} style={{display:"inline-block", margin:"30px" , padding:"20px"}}>
          <Cards style={{  width:"240px", height:"280px" }} id={e.id} title={e.title} desc={e.description} image={e.image} />
        </div>
      )
      
    })}
    </>  
    
  )
 
}

export default Dashboard

