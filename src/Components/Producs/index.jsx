import React from 'react';
import s from './Products.module.scss';

//Material UI
import {
	Grid,
	Box
} from '@mui/material';
import Topics from './Topics';


const Products = () => {

	return(
		<Grid container className={s.container} id='interior'>
			<Grid item xs={1} className={s.linecontainer}>
				<Box className={s.line1}></Box>
					<p>02</p>
				<Box className={s.line2}></Box>
				<Box className={s.line3}></Box>
			</Grid>

			<Grid item container xs={12} className={s.content}>
				<Grid item xs={10} className={s.title}>
					<h3>Mobiliario e interiorismo</h3>
				</Grid>

				<Grid item container xs={10} className={s.data}>
					<Topics/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Products;