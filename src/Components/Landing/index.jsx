import React from 'react';
import s from './Landing.module.scss';

//Material UI
import {
	Grid,
	Box,
  Button,
  Link
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ImageCarousel from '../../shared/Carousel';

const Landing = () => {

	return(
		<Grid container className={s.container} id='home'>
      <Grid item container xs={12} className={s.background}>
        <ImageCarousel/>
      </Grid>

    <Grid item container xs={12} className={s.content}>

     <Grid item xs={1} className={s.linecontainer}>
       <p>01</p>
       <Box className={s.line}></Box>
     </Grid>

     <Grid item xs={9} container className={s.header}>
      <Grid item xs={12} className={s.title}>
       <p style={{fontWeight: 300}}>MADERA QUE</p>
       <p style={{fontWeight: 600}}>INSPIRA</p>
       <p style={{fontWeight: 300}}>CONFIANZA</p>
      </Grid>
      <Grid item xs={12} className={s.slogan}>
          <p>Descubre la belleza natural de la madera en nuestra web.</p>
      </Grid>
      <Grid item lg={12} md={12} xs={12} sx={{mt: 3}}>
        <Button variant='contained' color='error'>
         <p style={{margin: 0, textAlign: 'start', fontSize: '0.8rem', fontWeight: 400}}>Presupuestar</p>
         <ChevronRightIcon/>
        </Button>
        <Link href='https://www.egger.com/es/?country=AR' target='_blank'>
          <Button variant='contained' color='error' sx={{ml: 1}}>
          <p style={{margin: 0, textAlign: 'start', fontSize: '0.8rem', fontWeight: 400}}>Calculo de espacios</p>
          <ChevronRightIcon/>
          </Button>
        </Link>
      </Grid>
     </Grid>

    </Grid>
		</Grid>
	)
}

export default Landing;