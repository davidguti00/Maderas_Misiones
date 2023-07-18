import React from 'react';
import s from './Especification.module.scss';

//Material UI
import {
	Grid,
	Box,
	Link,
	Button
} from '@mui/material';


const Especification = () => {

	return(
		<Grid container className={s.container} id='especification'>
			<Grid item xs={1} className={s.linecontainer}>
				<Box className={s.line1}></Box>
					<p>08</p>
				<Box className={s.line2}></Box>
				<Box className={s.line3}></Box>
			</Grid>

			<Grid item container xs={12} className={s.content}>
				<Grid item xs={10} className={s.title}>
					<h3>Sobre nosotros</h3>
				</Grid>

				<Grid item container xs={12} className={s.data}>
					
					<Grid item container xs={11} sx={{display: "flex", justifyContent: 'flex-end', alignItems: 'center', height: '90%'}}>
						<Grid item lg={5} md={11} xs={11} sx={{display: "flex", flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', padding: '25px', zIndex: 10}}>
							<h3 style={{margin: 0, fontSize: '2.5rem', color: '#EEEEEE', marginBottom: '20px'}}>Lorem ipsum4</h3>
							<p style={{margin: 0, fontSize: '1.2rem',marginBottom: '10px', fontWeight: 400, color: '#EEEEEE', textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consesdfsdfsdfsdfsdfsdfsdfsd sdf sdfsdf  sdfsdfsdf sdffsdf sdf sdfsdf sdf sdfsdf sdf sd   sdfsdfsdfsd sfsdfsd  sdf sdf sdf sdf sctetur adipiscing elit. Integer iaculis tincidunt augue eget tristique. Sed eget volutpat nulla. Etiam luctus rutrum dolor in volutpat. Cras pharetra ipsum quis purus convallis, ut finibus quam eleifend. Maecenas at massa egestas, condimentum nunc vel, malesuada mauris. Vestibulum ultrices, ex sit amet accumsan porttitor, purus magna convallis neque, ac condimentum ex felis ac nisl. Duis sed consectetur libero, ac molestie risus.</p>
							<Grid >
								<Link href='#contact'>
									<Button variant='contained' color='error' sx={{mr: 5, mb: 1, mt:3, paddingLeft: '1.5rem', paddingRight:'1.5rem'}}>
										Contactanos
									</Button>
								</Link>
								<Link href='#maps'>
									<Button variant='contained' color='error' sx={{mr: 5, mb: 1, mt:3, paddingLeft: '2.5rem', paddingRight:'2.5rem'}}>
										Visitanos
									</Button>
								</Link>
							</Grid>
						</Grid>
							
						
						
						<Grid item lg={6} md={11} xs={11} sx={{display: "flex", flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '10px', zIndex: 10}}>
							<iframe width="90%" height="435px" src="https://www.youtube.com/embed/hdlM-Sm6MLs" title="Cómo Identificar Los Tipos De Madera" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Especification;