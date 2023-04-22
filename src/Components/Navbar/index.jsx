import React from 'react';
import s from './Navbar.module.scss';

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
 {name: 'About Us', href: 'about'},
 {name: 'Products and Services', href: 'products'},
 {name: 'Manufacturing Process', href: 'manufacturing'},
 {name: 'Research Development', href: 'research'},
 {name: 'Case Studies', href: 'studies'},
 {name: 'News', href: 'news'},
]

const Navbar = () => {

	return(
  <ThemeProvider theme={theme}>
		<Grid container item xs={12} className={s.container}>
   <Grid container item xs={10.5}>
    <Grid item lg={6} md={6} xs={12}>
     <Link href='' className={s.logo}>
     <p style={{fontWeight: 600}}>Energy</p>
     <p style={{fontWeight: 300}}>Steel</p>
     </Link>
    </Grid>
    <Grid item lg={6} md={6} xs={12} className={s.contact}>
     <p style={{color: '#EEEEEE', marginRight: '10px', fontWeight: 300, fontSize: '0.9rem'}}>+54 11 0542234</p>
     <Button variant='outlined' color='primary' sx={{fontSize: '0.8rem'}}>
       Contact Us
     </Button>
    </Grid>
   </Grid>
   <Grid container item xs={10.5}>
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