import React from 'react';
import s from './Applicated.module.scss';

//Material UI
import {
	Grid,
	Box
} from '@mui/material';
import ImageCarousel from '../../shared/Carousel';

//---------Cambiar---------
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
//------------------------


const Applicated = () => {

	return(
		<Grid container className={s.container} id='applicated'>
			<Grid item xs={1} className={s.linecontainer}>
				<Box className={s.line1}></Box>
					<p>06</p>
				<Box className={s.line2}></Box>
				<Box className={s.line3}></Box>
			</Grid>

			<Grid item container xs={12} className={s.content}>
				<Grid item xs={10} className={s.title}>
					<h3>Productos aplicados</h3>
				</Grid>

				<Grid item container xs={10} className={s.data}>
					<Grid item container xs={12} sx={{display: "flex", justifyContent: 'center', alignItems: 'center', maxHeight: '90%'}}>
						<ImageCarousel images={images}/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Applicated;