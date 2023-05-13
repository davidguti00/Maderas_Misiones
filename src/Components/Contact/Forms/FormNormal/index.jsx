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
      email: '',
      category: 'none',
      subject: '',
      message: '',
   })

   return (
		<Grid item xs={12} container className={s.container}>
         <Grid item xs={6.5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>  
            <h4 style={{margin: 0, fontSize: '1.4rem', fontWeight: 500}}>Formulario de contacto</h4>
            <p style={{margin: 0, marginTop: '5px', fontSize: '1rem', fontWeight: 400}}>Comunicate para conocer más sobre nuestros productos</p>
         </Grid>

			<Grid item container xs={6.5} className={s.form}>
            <Grid item xs={5.8}>
               <p>Nombre</p>
               <TextField value={form.name}
                  onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))} 
                  sx={{width: '100%'}}
               />
            </Grid>
            <Grid item xs={5.8}>
               <p>Apellido</p>
               <TextField value={form.name}
                  onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))} 
                  sx={{width: '100%'}}
               />
            </Grid>
            <Grid item xs={5.8}>
               <p>Categoría</p>
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
            <Grid item xs={5.8}>
               <p>Asunto</p>
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
            <Button variant='contained' color='error' onClick={() => alert('Enviado')}>
               <ArrowForwardIosIcon sx={{fontSize: '1.2rem', color: '#EEEEEE'}}/>
            </Button>
         </Grid>
		</Grid>
   )
}

export default FormNormal;