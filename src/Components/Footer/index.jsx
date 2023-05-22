import React from 'react';
import s from './Footer.module.scss';

import logo from '../Navbar/assets/whitelogo.png';

//Material UI
import {
	Grid,
   Link
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const options = [
   {name: 'Mobiliario e Interiorismo', href: 'interior'},
   {name: 'Construcción', href: 'construction'},
   {name: 'Pisos', href: 'floors'},
   {name: 'Sobre nosotros', href: 'about'},
   {name: 'Contacto', href: 'contact'},
  ]

const Footer = () => {

	return(
		<Grid item xs={12} container className={s.container}>
         <Grid item container lg={6} md={12} xs={12} sx={{justifyContent: 'center', my: 5}}>
            <Grid item xs={7} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
               <img src={logo} alt="footer-logo" height='40rem'/>
            </Grid>
            <Grid item xs={7} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mt: 2}}>
               <InstagramIcon sx={{fontSize: '1.6rem', color: '#EEEEEE', mr: 1}}/>
               <LinkedInIcon sx={{fontSize: '1.6rem', color: '#EEEEEE', mr: 1}}/>
               <FacebookIcon sx={{fontSize: '1.6rem', color: '#EEEEEE'}}/>
            </Grid>
         </Grid>

         <Grid item container lg={5} md={11} xs={11} sx={{justifyContent: 'flex-start', alignItems: 'center', my: 5, mx: 5}}>
            {
               options.map((item, i) => (
                  <Grid item xs={6} key={i}>
                     <Link href={`#${item.href}`} sx={{textDecoration: 'none'}}>
                        <p style={{fontSize: '0.8rem', color: '#EEEEEE', margin: 0, marginBottom: '15px'}}>{item.name}</p>
                     </Link>
                  </Grid>
               ))
            }
         </Grid>

         <Grid item container xs={12} sx={{justifyContent: 'center', alignItems: 'center', mb: 3}}>
            <Grid item xs={5} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
               <h4 style={{fontSize: '1rem', color: '#EEEEEE', fontWeight: 400, textAlign: 'center'}}>MADERA QUE INSPIRA CONFIANZA</h4>
            </Grid>
            <Grid item xs={5} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
               <p style={{fontSize: '0.7rem', color: '#EEEEEE', textAlign: 'center'}}>2023 Maderas Misiones ®. Todos los derechos reservados</p>
            </Grid>
         </Grid>
		</Grid>
	)
}

export default Footer;