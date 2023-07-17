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

import landingbkg from '../../assets/landingimg.jpg';
import landing2bkg from '../../assets/landing2img.jpg';
import landing3bkg from '../../assets/landing3img.jpg';
import landing4bkg from '../../assets/landing4img.jpg';
import landing5bkg from '../../assets/landing5img.jpg';
import landing6bkg from '../../assets/landing6img.jpg';
import landing7bkg from '../../assets/landing7img.jpg';

let images = [
  landingbkg,
  landing2bkg,
  landing3bkg,
  landing4bkg,
  landing5bkg,
  landing6bkg,
  landing7bkg
]

const Landing = () => {

	return(
		<Grid container className={s.container} id='home'>
      <Grid item container xs={12} className={s.background}>
        <ImageCarousel images={images}/>
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
        <Link href='#contact'>
          <Button variant='contained' color='error' sx={{mr: 2, mb: 1}}>
            <p style={{margin: 0, textAlign: 'start', fontSize: '0.8rem', fontWeight: 400}}>Presupuestar</p>
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