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
					<FloorTopics/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Floors;