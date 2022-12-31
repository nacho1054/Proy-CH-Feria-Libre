import ItemCount from "../ItemCount/ItemCount";
import { Button, Card, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import classes from './ItemDetail.module.css'

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    console.log(item)
    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.")
    }

    return (
        <div className={classes.root}>
        {
            item
            ?
                <Card className={classes.content}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img className={classes.mainImage} src={item.photo} />
                        </Grid>
                        <Grid  item xs={12} md={6}>
                            <div className={classes.information}>
                                <div>
                                    <Typography component="h1" variant="h3">{item.title}</Typography>
                                    <Typography variant="h4">{item.description}</Typography>
                                </div>
                                <div>
                                    <div className={classes.priceInfo}>
                                        <Typography variant="h5">${item.price}</Typography>
                                        <Typography variant="h5">{item.stock} Item{item.stock === 1 ? '' : 's'} </Typography>
                                    </div>
                                    <div>
                                        <ItemCount item={item} />
                                    </div>
                                </div>
                            </div>
                            
                        </Grid>

                    </Grid>
                </Card>
            : <CircularProgress />
        }
        </div>
    );
}

export default ItemDetail;