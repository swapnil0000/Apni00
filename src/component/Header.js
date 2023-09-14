import React from 'react'
import {AppBar, Avatar, Box, IconButton, Input, InputAdornment, Stack, Toolbar, Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import Drawers from './Drawers';
const Header = () => {
  return (
    <>
    <Box position='sticky' height='60px' >
    <AppBar sx={{ boxShadow: "none" }} >
        <Toolbar sx={{bgcolor:'white', border:"transparent", color:'black' , display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'space-between' }}>
         <Box sx={{display:"flex",flexDirection:'row' ,alignContent:'center'}}>

        {/* Drawer open  */}

         <IconButton sx={{display:'flex',flexDirection:'column' }}>
          <MenuIcon sx={{marginRight:'2rem', marginTop:"10px" , color:'black'}} />
         </IconButton>
          <img src='/logo1.svg' alt='logo'/>
         </Box>
         <Box>
           <Input variant="outlined" disableUnderline  placeholder='What would you like to eat' sx={{width: "300px",
              background:  "#F8F8F8",}}
              startAdornment={
                <InputAdornment position="start">
                  < SearchIcon/>
                </InputAdornment>
              }/>     
         </Box>
      <Box sx={{display:'flex', flexDirection:'row'}}>
        <Stack direction="row" spacing={1} sx={{ display:'flex', alignItems:'center' ,    marginRight:'40px' }}>
          <Avatar sizes='10px' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography variant='caption'>User</Typography>
          </Stack>
          <img src='/Vector.svg' alt='#'/>
         <Typography sx={{padding:'10px' , variant:'body1'}}>MMMUT, GORAKHPUR</Typography>
         </Box>
        </Toolbar>
    </AppBar>

 </Box>
 </>
  )
}

export default Header