import React from 'react';
import s from './MobileMenu.module.css';

import logo from '../assets/whitelogo.png';

import {
   Grid,
   Link
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const options = [
   {name: 'Mobiliario e Interiorismo', href: '#interior'},
   {name: 'Construcción', href: '#construction'},
   {name: 'Pisos', href: '#floors'},
   {name: 'Productos aplicados', href: '#applicated'},
   {name: 'Área especificación', href: '#especification'},
   {name: 'Sobre nosotros', href: '#about'},
   {name: 'Visitanos', href: '#maps'},
   {name: 'Contacto', href: '#contact'},
   {name: 'Visualización de diseños', href: 'https://www.vds-egger.com/?country=AR&language=es', pref: true},
   {name: 'Optimizador de cortes', href: 'https://www.optimizadoronline.com/empresa/maderasmisionessa/opti#/login', pref: true},
  ]


const MobileMenu = ({open, setOpen}) => {

   return (
      <Grid item container xs={12} className={`${s.container} ${open ? s.openContainer : ''}`}>\
         <Grid item xs={12} sx={{height: '100%'}}>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '10vh'}}>
               <img src={logo} alt='logo' style={{width: '8rem', marginLeft: '2rem'}}/>
               <ChevronLeftIcon sx={{fontSize: '5rem', color: '#EEEEEE'}} onClick={() => setOpen(false)}/>
            </Grid>

            <Grid item container xs={12} sx={{justifyContent: 'center', alignItems: 'flex-start', mt: 5}}>
                  {
                     options.map((item, i) => (
                        <Grid item xs={11} key={i}>
                           <Link href={`${item.href}`} target={item?.pref ? '_blank': ''} sx={{textDecoration: 'none'}} onClick={() => setOpen(false)}>
                              <p style={{fontSize: '1.5rem', textAlign: item?.pref ? 'center' : '', color: '#EEEEEE', margin: 0, padding: item?.pref ? '5px' : '', marginBottom: '20px', border: item?.pref ? '1px solid #EEEEEE' : '', borderRadius: item?.pref ? '5px' : ''}}>{item.name}</p>
                           </Link>
                        </Grid>
                     ))
                  }
            </Grid>
         </Grid>
      </Grid>
   )
}

export default MobileMenu;