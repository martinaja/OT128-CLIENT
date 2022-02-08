import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ButtonMenuBackOffice() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
        Menú
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
        <MenuItem onClick={handleClose}>Actividades</MenuItem>
        <MenuItem onClick={handleClose}>Novedades</MenuItem>
        <MenuItem onClick={handleClose}>Noticias</MenuItem>
        <MenuItem onClick={handleClose}>Testimonios</MenuItem>
        <MenuItem onClick={handleClose}>Nosotros</MenuItem>
        <MenuItem onClick={handleClose}>Contacto</MenuItem>
      </Menu>
    </div>
  );
}