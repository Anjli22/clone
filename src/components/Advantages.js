import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <div> <h1 style={{textAlign:'center',marginTop:"20px",color:"gray"}}>Advantages</h1>
    <Card sx={{ display:"flex",justifyContent:'space-around' }}>
    {/* card 1 */}
      <CardActionArea sx={{}}>
        <CardMedia
          component="img"
          // height="140"
          // image="http://www.clker.com/cliparts/g/S/4/q/Y/G/gray-shield-hi.png"
          // alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>


      {/* card2 */}


      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
          // image="https://tse3.mm.bing.net/th?id=OIP.DoMpECZuBhx3L11HlSa72wHaHa&pid=Api&P=0&w=300&h=300"
          // alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center" >
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* card 3 */}

      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
          // image="http://www.clker.com/cliparts/g/S/4/q/Y/G/gray-shield-hi.png"
          // alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div style={{textAlign:"center",margin:"40px"}}>
      <Button variant="contained" >Learn More</Button>
    </div>
    </div>
  );
}
