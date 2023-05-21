import React from 'react';
import s from './Navbar.module.scss';

//assets
import whitelogo from './assets/logod.png';

//Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
	Grid,
 Button,
 Link
} from '@mui/material';

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
]

const Navbar = () => {

	return(
  <ThemeProvider theme={theme}>
		<Grid container item xs={12} className={s.container}>
      <Grid container item xs={10}>
        <Grid item lg={6} md={6} xs={12} className={s.logo}>
          <Link href='#home' sx={{textDecoration: 'none'}} style={{width: '15%', marginRight: '10px'}}>
            <img src={whitelogo} alt="logo" style={{width:'100%'}}/>
          </Link>
          <Link href='#home' sx={{textDecoration: 'none'}}>
            <p style={{fontWeight: 700}}>Maderas</p>
          </Link>
          <Link href='#home' sx={{textDecoration: 'none'}}>
            <p style={{fontWeight: 400, opacity: 0.8, marginLeft: '1px'}}>Misiones</p>
          </Link>
        </Grid>
        <Grid item lg={6} md={6} xs={12} className={s.contact}>
        <p style={{color: '#EEEEEE', marginRight: '15px', fontWeight: 300, fontSize: '0.9rem'}}>+54 11 151420023</p>
        <Button variant='outlined' color='primary' sx={{fontSize: '0.7rem', mb: 0.5}}>
          Contactar
        </Button>
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