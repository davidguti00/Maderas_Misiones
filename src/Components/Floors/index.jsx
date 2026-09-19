import React from 'react';
import s from './Floors.module.scss';

//Material UI
import {
	Grid,
	Box
} from '@mui/material';
import FloorTopics from './Topics';


const Floors = () => {

	return(
		<Grid container className={s.container} id='floors'>
			<Grid item xs={1} className={s.linecontainer}>
				<Box className={s.line1}></Box>
					<p>04</p>
				<Box className={s.line2}></Box>
				<Box className={s.line3}></Box>
			</Grid>

			<Grid item container xs={12} className={s.content}>
				<Grid item xs={10} className={s.title}>
					<h3>Pisos</h3>

				</Grid>

				<Grid item container xs={10} className={s.data}>
					<Grid item xs={12} sx={{color: "#EEEEEE", px: 2}}>
					<p style={{fontSize: '0.9rem', lineHeight: 1.65}}>Pisos EGGER en Mar del Plata: conocé en Maderas Misiones los pisos NatureSense, con diseños inspirados en la madera y sistemas de instalación por encastre.</p>
					<p style={{fontSize: '0.9rem'}}><a href="https://www.egger.com/es/pisos/?country=AR" target="_blank" rel="noreferrer" style={{color: 'inherit'}}>Colección de Pisos 25+ de EGGER ↗</a></p>
                    </Grid>
					<FloorTopics/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Floors;
