import "./Card.css";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ItemCard = ({product}) => {
    const productData = product.data()

    return (
    <Card>
        <CardActionArea component={Link} to={`/item/${product.id}`}>
            <CardMedia
                component="img"
                height="300"
                image={productData.photo}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {productData.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {productData.description}
                </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default ItemCard;