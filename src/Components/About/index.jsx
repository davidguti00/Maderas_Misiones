import React from 'react';
import s from './About.module.scss';

import aboutimg from '../../assets/aboutimage.jpg';

//Material UI
import {
	Grid,
	Box
} from '@mui/material';


const About = () => {

	return(
		<Grid container className={s.container} id='about'>
			<Grid item xs={1} className={s.linecontainer}>
				<Box className={s.line1}></Box>
					<p>07</p>
				<Box className={s.line2}></Box>
				<Box className={s.line3}></Box>
			</Grid>

			<Grid item container xs={12} className={s.content}>
				<Grid item xs={10} className={s.title}>
					<h3>Area de especificacion</h3>
				</Grid>

				<Grid item container xs={12} className={s.data}>
					
					<Grid item container xs={11.8} sx={{display: "flex", justifyContent: 'flex-end', alignItems: 'center', height: '90%'}}>
						<Grid item lg={5} md={11} xs={11} sx={{display: "flex", flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', padding: '15px', zIndex: 10}}>
							<h3 style={{margin: 0, fontSize: '2.5rem', color: '#EEEEEE', marginBottom: '20px'}}>Lorem ipsum</h3>
							<p style={{margin: 0, fontSize: '1rem', fontWeight: 300, color: '#EEEEEE', textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis tincidunt augue eget tristique. Sed eget volutpat nulla. Etiam luctus rutrum dolor in volutpat. Cras pharetra ipsum quis purus convallis, ut finibus quam eleifend. Maecenas at massa egestas, condimentum nunc vel, malesuada mauris. Vestibulum ultrices, ex sit amet accumsan porttitor, purus magna convallis neque, ac condimentum ex felis ac nisl. Duis sed consectetur libero, ac molestie risus.</p>
						</Grid>
						<img src={aboutimg} alt="about_mm" style={{height: '70%', width: '100vw', objectFit: 'cover', position: 'absolute', filter: 'brightness(0.4)', left: 0}}/>
					</Grid>

				</Grid>
			</Grid>
		</Grid>
	)
}

export default About;