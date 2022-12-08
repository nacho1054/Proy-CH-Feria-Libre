import * as React from 'react';
import "./BasicMenu.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  className="BasicMenu">
      <Button
        id="basic-category-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categorías
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to={`/category/Vehiculos`} className="Link">Vehículos </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Inmuebles`} className="Link">Inmuebles </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Supermercado`} className="Link">Supermercado </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Tecnologia`} className="Link">Tecnología </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Hogar y Muebles`} className="Link">Hogar y Muebles </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Electrodomesticos`} className="Link">Electrodomésticos </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Herramientas`} className="Link">Herramientas </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Construccion`} className="Link">Construcción </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Deportes y Fitness`} className="Link">Deportes y Fitness </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Otros`} className="Link">Otros </Link></MenuItem>
      </Menu>
    </div>
  );
}