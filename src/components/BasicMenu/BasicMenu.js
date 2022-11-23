import * as React from 'react';
import "./BasicMenu.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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
        <MenuItem onClick={handleClose}>Vehículos</MenuItem>
        <MenuItem onClick={handleClose}>Inmuebles</MenuItem>
        <MenuItem onClick={handleClose}>Supermercado</MenuItem>
        <MenuItem onClick={handleClose}>Tecnología</MenuItem>
        <MenuItem onClick={handleClose}>Hogar y Muebles</MenuItem>
        <MenuItem onClick={handleClose}>Electrodomésticos</MenuItem>
        <MenuItem onClick={handleClose}>Herramientas</MenuItem>
        <MenuItem onClick={handleClose}>Construcción</MenuItem>
        <MenuItem onClick={handleClose}>Deportes y Fitness</MenuItem>
        <MenuItem onClick={handleClose}>Otros</MenuItem>
      </Menu>
    </div>
  );
}