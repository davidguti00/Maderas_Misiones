import React from 'react';
import s from './Home.module.scss';

//Material UI
import {
	Grid,
} from '@mui/material';
import Landing from '../Landing';
import Navbar from '../Navbar';

const Home = () => {

	return(
		<Grid container className={s.container}>
				<Navbar/>
				<Landing/>
		</Grid>
	)
}

export default Home;