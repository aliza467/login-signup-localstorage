import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const Cards = ({ title, desc, image, id }) => {
  const navigate = useNavigate();
  return (
    <div>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0, 20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {desc.slice(0, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/products/${id}`)}  >Add</Button>
        
      </CardActions>
    </Card>
      
    </div>
  )
}

export default Cards

