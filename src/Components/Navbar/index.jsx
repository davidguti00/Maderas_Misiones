import React from 'react';
import s from './Navbar.module.scss';

//assets
import whitelogo from './assets/whitelogo.png';

//Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
	Grid,
 Button,
 Link
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
  {name: 'Mobiliario e Interiorismo', href: 'interior'},
  {name: 'Construcción', href: 'construction'},
  {name: 'Pisos', href: 'floors'},
  {name: 'Sobre nosotros', href: 'about'},
  {name: 'Contacto', href: 'contact'},
  {name: 'Visitanos', href: 'maps'},
]

const Navbar = ({setOpen}) => {

	return(
  <ThemeProvider theme={theme}>
		<Grid container item xs={12} className={s.container}>
      <Grid container item xs={10} sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Grid item md={2} xs={1} className={s.burger} sx={{mt: 2}}>
          <MenuIcon sx={{fontSize: '3rem', color: '#EEEEEE'}} onClick={() => setOpen(true)}/>
        </Grid>
        <Grid item lg={9} md={8} xs={9} className={s.logo}>
          <Link href='#home' sx={{textDecoration: 'none'}}>
            <img src={whitelogo} alt="logo" style={{width:'6rem'}}/>
          </Link>
        </Grid>
        <Grid item lg={3} md={4} xs={2} className={s.contact}>
          <p style={{color: '#EEEEEE', marginRight: '15px', fontWeight: 300, fontSize: '0.9rem'}}>+54 11 151420023</p>
          <Link href='#contact'>
            <Button variant='outlined' color='primary' sx={{fontSize: '0.7rem', mb: 0.5}}>
              Contactar
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container item xs={10} sx={{mb: 2}}>
        {
          options.map((item, i) => {
          return(<Link href={'#'+item.href} key={i} className={s.link}>{item.name}</Link>)
          })
        }
      </Grid>
		</Grid>
  </ThemeProvider>
	)
}

export default Navbar;