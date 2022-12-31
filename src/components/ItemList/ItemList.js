import React from "react";
import Item from "../Item/Item";
import { Grid } from "@mui/material";
import classes from './ItemList.module.css'

const  ItemList = ({ items }) => {

    return (
        <Grid className={classes.root} container spacing={2}>
            {items.map((item) => 
            <Grid item xs={12} md={4}>
                <Item key={item.id} item={item} />
            </Grid>
            )}
        </Grid>
    )
}

export default ItemList;