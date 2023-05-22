import React, { useState } from 'react';
import s from './Home.module.scss';

//Componente
import Landing from '../Landing';
import Navbar from '../Navbar';
import Products from '../Producs';
import Construction from '../Construction';
import Floors from '../Floors';
import Contact from '../Contact';
import MobileMenu from '../Navbar/MobileMenu';
import About from '../About';
import Footer from '../Footer';

//Material UI
import {
	Grid,
} from '@mui/material';

const Home = () => {

	const [open, setOpen] = useState(false);

	return(
		<Grid container className={s.container}>
				<MobileMenu open={open} setOpen={setOpen}/>
				<Navbar setOpen={setOpen}/>
				<Landing/>
				<Products/>
				<Construction/>
				<Floors/>
				<About/>
				<Contact/>
				<Footer/>
		</Grid>
	)
}

export default Home;