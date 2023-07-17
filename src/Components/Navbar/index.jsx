import React, { useState } from 'react';
import s from './Navbar.module.scss';

//assets
import whitelogo from './assets/whitelogo.png';

//Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
	Grid,
  Button,
  Link,
  Menu, 
  MenuItem 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
 palette: {
   primary: {
     main: '#EEEEEE',
     darker: '#CCCCCC',
   },
 },
});

const options = [
  {
    name: 'Productos y servicios',
    selector: true,
    items:[
      {name: 'Mobiliario e Interiorismo', href: '#interior'},
      {name: 'Construcción', href: '#construction'},
      {name: 'Pisos', href: '#floors'},
      {name: 'Área especificación', href: '#about'},
      {name: 'Visualización de diseños', href: 'https://www.vds-egger.com/?country=AR&language=es'},
    ]
  },
  {name: 'Productos aplicados', href: '#applicated'},
  {name: 'Sobre nosotros', href: '#especification'},
  {name: 'Optimizador de cortes', href: 'https://www.optimizadoronline.com/empresa/maderasmisionessa/opti#/login'},
]

const Navbar = ({ setOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleOpenMenu = (event, index) => {
    setAnchorEl(event.currentTarget);
    setActiveMenuItem(index);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActiveMenuItem(null);
  };

  const handleMenuContainerMouseLeave = () => {
    if (Boolean(anchorEl)) {
      setAnchorEl(null);
      setActiveMenuItem(null);
    }
  };
	return(
    <ThemeProvider theme={theme}>
      <Grid container item xs={12} className={s.container}>
        <Grid container item xs={12} sx={{justifyContent: 'center', alignItems: 'center'}}>

          <Grid item xs={2} sm={2}  className={s.burger} sx={{mt: 1}}>
            <MenuIcon sx={{fontSize: '3rem', color: '#EEEEEE'}} onClick={() => setOpen(true)}/>
          </Grid>
          
          <Grid item xs={10} sm={10} md={2} lg={2} sx={{ mb: 1 }} className={s.logo}>
            <Link href='#home' sx={{textDecoration: 'none'}}>
              <img src={whitelogo} alt="logo" style={{width:'8rem'}}/>
            </Link>
          </Grid>

          <Grid container item md={10} lg={8} className={s.items}>
          {options.map((item, i) => (
            item.selector ? 
              <Grid item xs={2.5} sx={{display: 'flex', alingItems: 'center', justifyContent: 'center'}}
                onMouseEnter={(e) => handleOpenMenu(e, i)}
                onMouseLeave={handleMenuContainerMouseLeave}
              >
                <Link
                  href={item.href}
                  className={s.link} 
                  target={item?.pref ? '_blank' : ''}
                  sx={item?.pref ? { border: '1px solid #EEEEEE', borderRadius: '5px' } : {}}
                >
                  {item.name}
                </Link>

                {activeMenuItem === i && (
                  <Menu sx={{
                    "& .MuiMenu-paper": { 
                      backgroundColor: '#22222299', 
                      // marginTop: '38px', 
                      zIndex: 999 }
                  }}
                    anchorEl={anchorEl}mate3030mate3030
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    getContentAnchorEl={null}
                  >
                    {item.items.map((subItem, j) => (
                      <MenuItem
                      sx={{
                        backgroundColor: '#22222299',
                        fontSize: '0.8rem',
                        fontFamily: 'Montserrat',
                        display: 'flex',
                        justifyContent: 'left',
                        fontWeight: 500,
                        '&:hover': { background: '#d32f2f' },
                      }}
                        key={j} onClick={handleCloseMenu}>
                        <Link  sx={{ textDecoration: 'none'}} href={subItem.href} >
                          {subItem.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Grid>
             : 
             <Grid item xs={2.5} sx={{display: 'flex', alingItems: 'center', justifyContent: 'center'}}>
                <Link
                  href={item.href}
                  className={s.link}
                  target={item?.pref ? '_blank' : ''}
                  sx={item?.pref ? { border: '1px solid #EEEEEE', borderRadius: '5px' } : {}}
                >
                  {item.name}
                </Link>
              </Grid>
            
          ))}
          </Grid>



          <Grid item lg={2} sx={{ mb: 1, mt: 1 }}  className={s.contact}>
            <p>223 482-3536 -  Av. Juan b. Justo </p>
            <p>223 472-8236 -  Av. Pedro Luro</p>
          </Grid>
        </Grid>

        {/* <Grid container item xs={10.5} sx={{ mb: 2, mt: 1 }}>
          {options.map((item, i) => (
            <Grid key={i}>
              {item.selector ? (
                <Grid
                  onMouseEnter={(e) => handleOpenMenu(e, i)}
                  onMouseLeave={handleMenuContainerMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`${s.link} ${activeMenuItem === i ? s.active : ''}`}
                    target={item?.pref ? '_blank' : ''}
                    sx={item?.pref ? { border: '1px solid #EEEEEE', borderRadius: '5px' } : {}}
                  >
                    {item.name}
                  </Link>

                  {activeMenuItem === i && (
                    <Menu
                      className={s.link}
                      sx={item?.pref ? { border: '1px solid #EEEEEE', borderRadius: '5px' } : {}}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleCloseMenu}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                      getContentAnchorEl={null}
                    >
                      {item.items.map((subItem, j) => (
                        <MenuItem key={j} onClick={handleCloseMenu}>
                          <Link href={subItem.href} className={s.link}>
                            {subItem.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Grid>
              ) : (
                <Link
                  href={item.href}
                  className={s.link}
                  target={item?.pref ? '_blank' : ''}
                  sx={item?.pref ? { border: '1px solid #EEEEEE', borderRadius: '5px' } : {}}
                >
                  {item.name}
                </Link>
              )}
            </Grid>
          ))}
        </Grid> */}
      </Grid>
    </ThemeProvider>
  );
};

export default Navbar;