import React from 'react'
import {Box, Drawer, IconButton,Tooltip,Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DiningIcon from '@mui/icons-material/Dining';
import ListIcon from '@mui/icons-material/List';
import ChatIcon from '@mui/icons-material/Chat';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import {Outlet, Link } from 'react-router-dom';
const Drawers = () => {
  
  const draw=[
    {
      value:<HomeIcon/>,
      id:'1',
      name:'Home',
      path:'/'
    },
    { 
      value:<DiningIcon/>,
      id:'2',
      path:'/meal',
      name:'Meal'
    },
    { 
      value:<ListIcon/>,
      id:'2',
      path:'/menu',
      name:'Menu'
    },
    {
      value:<ChatIcon/> , 
      id:'3',
      path:'/chat',
      name:'Chat'
    },
    {
      value:<InfoIcon/>,
      id:'4',
      path:'/about',
      name:'About'
    },
    {
      value:<HelpIcon/>,
      id:'5',
      path:'/help',
      name:'Help'
    }
    ]
  return (
    <>
    <Box  flexGrow={1} spacing="5">
    <Drawer sx={{
                width: 'drawerWidth',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '240',
            boxSizing: 'border-box',
            border:'none'
          },
        }}
        variant="permanent"
        anchor="left" >

      <Box p={2} width="40px" textAlign="center" >
        <IconButton sx={{display:'flex',flexDirection:'column' }} >
          <MenuIcon sx={{marginRight:'2rem', marginTop:"10px" , color:'black', marginBottom:'30px'}} />
        </IconButton>
          <Typography variant='h6' component="div">
                {draw.map((ele)=>(

                  <Link to={ele.path} key={ele.id}>
                     <Tooltip title={ele.name} placement='left'   >
                     <Box color='black' sx={{marginBottom:'20px',
                    "&:hover": {
                       color: "orange", // Add your desired hover styles
                     },}}
                    > {ele.value}</Box>
                     </Tooltip>
                    {/* <Box color='black' sx={{marginBottom:'20px',
                    "&:hover": {
                       color: "orange", // Add your desired hover styles
                     },}}
                    > {ele.value}</Box> */}
                 </Link>
                    // <Button key={ele.id} variant='text' color='inherit' sx={{marginBottom:'20px',
                    // "&:hover": {
                    //    color: "orange", // Add your desired hover styles
                    //  },}}>{ele.value}</Button>
                ))}
           </Typography>
      </Box>
       </Drawer>
      </Box>
      <Outlet />
      </>
  )
}

export default Drawers