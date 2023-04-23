import React from 'react';
import s from './Home.module.scss';

//Material UI
import {
	Grid,
} from '@mui/material';
import Landing from '../Landing';
import Navbar from '../Navbar';
import Products from '../Producs';
import Construction from '../Construction';
import Floors from '../Floors';

const Home = () => {

	return(
		<Grid container className={s.container}>
				<Navbar/>
				<Landing/>
				<Products/>
				<Construction/>
				<Floors/>
		</Grid>
	)
}

export default Home;