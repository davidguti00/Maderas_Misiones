import React from 'react';
import s from './Construction.module.scss';

//Material UI
import {
	Grid,
	Box
} from '@mui/material';
import ConstructionTopics from './Topics';


const Construction = () => {

	return(
		<Grid container className={s.container} id='construction'>
			<Grid item xs={1} className={s.linecontainer}>
				<Box className={s.line1}></Box>
					<p>03</p>
				<Box className={s.line2}></Box>
				<Box className={s.line3}></Box>
			</Grid>

			<Grid item container xs={12} className={s.content}>
				<Grid item xs={10} className={s.title}>
					<h3>Construcción</h3>
				</Grid>

				<Grid item container xs={10} className={s.data}>
					<ConstructionTopics/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Construction;