import React from 'react'
import { useParams } from "react-router-dom";
import { productData } from '../data';
import { Card } from 'react-bootstrap';
import { CardContent, CardMedia , CardActionArea, Typography } from '@mui/material';

const Product = () => {

    const { id } = useParams();
  console.log(id);

  const filterData= productData.filter((e)=>e.id==id);
  return (
   
        <div>
            {filterData.map((e)=>{
                 <Card sx={{ maxWidth: 345 }}>
                 <CardActionArea>
                   <CardMedia
                     component="img"
                     height="140"
                     image={e.image}
                     alt={e.title}
                   />
                   <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                       {e.title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       {e.description}
                     </Typography>
                   </CardContent>
                 </CardActionArea>
               </Card>
            }
            )}
        </div>
        


      
    
  );
}

export default Product
