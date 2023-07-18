import React, { useState } from 'react';
import s from './FormNormal.module.scss';

//Material
import {
   Grid,
   TextField,
   Select,
   MenuItem,
   Button
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const FormNormal = () => {
   const [form, setForm] = useState({
      name: '',
      lastname: '',
      email: '',
      category: 'none',
      subject: '',
      message: '',
   })

   return (
		<Grid item xs={12} container className={s.container}>
         <Grid item xs={10} md={9} lg={6.5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', mt: 3, mb: 3}}>  
            <h4 style={{margin: 0, fontSize: '1.2rem', fontWeight: 600}}>Formulario de contacto</h4>
            <p style={{margin: 0, marginTop: '5px', fontSize: '.9rem', fontWeight: 400}}>Comunicate para conocer más sobre nuestros productos</p>
         </Grid>

			<Grid item container xs={10} md={9} lg={6.5} className={s.form}>
            <Grid item xs={12} md={5.8} lg={5.8}>
               <p style={{fontSize: '0.8rem'}}>Nombre</p>
               <TextField value={form.name}
                  onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))} 
                  sx={{width: '100%'}}
               />
            </Grid>
            <Grid item xs={12} md={5.8} lg={5.8}>
               <p style={{fontSize: '0.8rem'}}>Apellido</p>
               <TextField value={form.lastname}
                  onChange={(e) => setForm(prev => ({...prev, lastname: e.target.value}))} 
                  sx={{width: '100%'}}
               />
            </Grid>
            <Grid item xs={12} md={5.8} lg={5.8}>
               <p style={{fontSize: '0.8rem'}}>Categoría</p>
               <Select
                  value={form.category}
                  onChange={(e) => setForm(prev => ({...prev, category: e.target.value}))}
                  sx={{width: '100%'}}
               >
                  <MenuItem value='none'>Seleccionar</MenuItem>
                  <MenuItem value='Mobiliario e interiorismo'>Mobiliario e interiorismo</MenuItem>
                  <MenuItem value='Construcción'>Construcción</MenuItem>
                  <MenuItem value=''>Pisos</MenuItem>
               </Select>
            </Grid>
            <Grid item xs={12} md={5.8} lg={5.8} >
               <p style={{fontSize: '0.8rem'}}>Asunto</p>
               <TextField value={form.subject}
                  onChange={(e) => setForm(prev => ({...prev, subject: e.target.value}))} 
                  sx={{width: '100%'}}
               />
            </Grid>
            <Grid item xs={12} sx={{mt: 3}}>
               <TextField
                  fullWidth
                  value={form.message}
                  onChange={e => setForm(prev => ({...prev, message: e.target.value}))}
                  label="Mensaje"
                  multiline
                  rows={6}
               />
            </Grid>
			</Grid>

         <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button variant='contained' color='error' type='submit' onClick={() => alert('Enviado')}>
               <ArrowForwardIosIcon sx={{fontSize: '1.2rem', color: '#EEEEEE'}}/>
            </Button>
         </Grid>
		</Grid>
   )
}

export default FormNormal;