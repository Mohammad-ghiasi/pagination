import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { itemType } from '@/app/simple/page';

export default function MediaCard(props: itemType) {
    const {id, ad_type, title, description, image, price} = props
    return (
        <Card className='bg-gray-700 text-gray-400  shadow-xl shadow-gray-900'>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={title}
            />
            <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>

                <Typography variant="body2">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>

            </CardContent>

            <CardActions>
                <Button size="small">More...</Button>
            </CardActions>
        </Card>
    );
}