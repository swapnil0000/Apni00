import { Box,  Card,  CardContent,  CardMedia,  Grid,  Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import DiscountIcon from '@mui/icons-material/Discount';
import rect1 from "../images/Rectangle1.jpg"
import rect2 from "../images/Rectangle2.jpg"
import rect3 from "../images/Rectangle3.jpg"
import rect4 from "../images/Rectangle4.jpg"


import menu from './Data';
const MainBody = () => {

  const option=[
    {
       id:1,
       icon:<LocationOnIcon/>,
       value:'Near By'
    },
    {
      id:2,
      icon: <FilterAltIcon/>,
      value:'Filter'
   },
   {
    id:3,
    icon:<StarBorderIcon/>,
    value:'Rating'
   },
   {
   id:4,
   icon:<SpaOutlinedIcon/>,
   value:'Pure Veg'
   },
  {
    id:5,
    icon:<ShoppingCartIcon/>,
    value:'Cuisiness'
  },
  {
    id:6,
    icon:<DiscountIcon/>,
    value:'Offer'
  },
]
const cardsvalue=[{
  id:1,
  img:rect1,
  description:"Burger Mozolla XL"
},
{
  id:2,
  img:rect2,
  description:"Burger Mozolla XL"
},
{
  id:3,
  img:rect3,
  description:"Burger Mozolla XL"
},
{
  id:4,
  img:rect4,
  description:"Burger Mozolla XL"
},
{
  id:3,
  img:rect3,
  description:"Burger Mozolla XL"
},
{
  id:3,
  img:rect3,
  description:"Burger Mozolla XL"
},
{
  id:3,
  img:rect3,
  description:"Burger Mozolla XL"
},
{
  id:3,
  img:rect3,
  description:"Burger Mozolla XL"
},
]
  return (
    <>

    {/* FIRST BOX */}

   <Box flexGrow='3' sx={{display:'flex', flexDirection:'column' , marginLeft:'80px'}}>
    <Box sx={{
      width:'950px', 
      height:'220px',
      bgcolor:'rgba(335, 175, 50, 10)',
      margin:'10px',color:'white', 
      fontWeight:'900',
    }}>
      <Box sx={{display:'flex',flexDirection:'column',marginTop:'50px'}}>
      <Typography variant='h2' > 50% Off </Typography>
      <Typography>Lorem ipsum dolor sit amet</Typography>
      </Box>
    </Box>
     
      {/* SECOND BOX */}
      
     <Box display='flex' flexDirection='row' marginTop='10px' gap='20px'>
   {option.map((ele)=>(
        <Box sx={{display:'flex',flexDirection:'row' , padding:'15px',marginLeft:'15px' , gap:'10px'}}>
        <Typography  key={ele.id}>{ele.icon}</Typography>
        <Typography sx={{cursor:'pointer',"&:hover": {
      textDecoration: "underline", },}}>{ele.value}</Typography>
        </Box>
      ))}
     </Box>

      {/* THIRD BOX */}
     <Box sx={{
      width:'950px', 
      height:'180px',
      bgcolor:'#F9EAE6',
      margin:'10px',color:'white', 
      fontWeight:'900',}}>

      <Box   sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
       <Typography sx={{
       margin:'10px', 
       color:'#808080',
       fontSize: "16px",
       fontFamily: 'Poppins',
       fontStyle:'normal' ,
       fontWeight: '700',
       lineHeight:'normal'}}>Popular Cuisines</Typography>

       <Typography sx={{
        color:'#DA7455',
        margin:'10px'
       }}>See All</Typography>
        </Box>


       <Box sx={{display:'flex', flexDirection:'row', gap:'20px'}}>
        {menu.map((ele)=>(
          <Box sx={{display:'flex', flexDirection:'column'}}>
          <Typography key={ele.id}>
            <img src={ele.img}/>
           <Typography color='black' textAlign='center'>{ele.value}</Typography>
          </Typography>
           </Box>
        ))}
       </Box>
       </Box>
      </Box>
      <Box width='950px' marginLeft='80px' marginTop='30px'>
        <Grid container spacing={1}>
          {
            cardsvalue.map(ele=>(
             <Grid item key={ele.id}  xs={4}>
                 <Card sx={{ maxWidth: 400  }}>
                 <CardMedia
                  component="img"
                   height="194"
                    image={ele.img}
                   alt="Paella dish"
                 />
                 <CardContent>
                  <Box>
                  <Typography variant="body2" color="text.secondary">
                   {ele.description}
                  </Typography>
                  <Typography>
                    $33.5
                  </Typography>
                  </Box>
      </CardContent>
              </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
   </>
  )
}

export default MainBody