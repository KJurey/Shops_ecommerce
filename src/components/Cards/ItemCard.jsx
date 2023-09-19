import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import NavigateTo from '../../utils/NavigateTo';

export default function ItemCard({ item }) {

  const mobileScreen = useMediaQuery('(max-width: 750px)');

  return (
    <>
      {mobileScreen ? (
        <Card
          key={item.id}
          sx={{
            minWidth: 150,
            maxWidth: 150,
            marginBottom: 5,
          }}
          onClick={NavigateTo(`/product/${item.id}`)}>
          <CardMedia
            sx={{
              height: 150,
              backgroundImage: 'linear-gradient(#e66465, #9198e5)',
              background: `no-repeat center/70% url(${item.image})`,
            }}
            component='img'
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography variant='h6' component='div'>
              ${item.price}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card
          key={item.id}
          sx={{
            minWidth: 270,
            maxWidth: 270
          }}>
          <CardMedia
            sx={{
              height: 290,
              backgroundImage: 'linear-gradient(#e66465, #9198e5)',
              background: `no-repeat center/70% url(${item.image})`,
            }}
            component='img'
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography variant='h6' component='div'>
              ${item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={NavigateTo(`/product/${item.id}`)}>Shop Now</Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}