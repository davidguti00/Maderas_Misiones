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
					<Grid item xs={12} sx={{color: '#EEEEEE', fontSize: '0.9rem', lineHeight: 1.6, px: 2}}>
                        <p>Conocé las familias EGGER y sus aplicaciones para muebles e interiores. <a style={{color: 'inherit'}} href="https://www.egger.com/es/mobiliario-e-interiorismo/coleccion-decorativa/?country=AR" target="_blank" rel="noreferrer">Colección Decorativa 26+</a>.</p>
                        <p>Para elegir colores y texturas, verificá una muestra original.</p>
                    </Grid>
                    <Topics/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Products;