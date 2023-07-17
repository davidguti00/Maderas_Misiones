import React from 'react';

import {
	Grid
} from '@mui/material';

const Mapas = () => {
	return (
		<Grid item container xs={12} id='maps' sx={{justifyContent: 'space-around', alignItems: 'center', minHeight: '50vh', backgroundColor: '#222222', paddingTop: '4vh', paddingBottom: '5vh'}}>
			<Grid item xs={11.5}>
				<p style={{color: '#EEEEEE', fontSize: '2rem'}}>Visitanos</p>
			</Grid>
			<Grid item xs={11.5} md={11.5} lg={5.8} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<iframe
					title='Av. Juan B. Justo 5808'
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.9391889217013!2d-57.59705638729797!3d-38.00187887181195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d92b97ebcb47%3A0x2663274458533b5f!2sMaderas%20Misiones!5e0!3m2!1ses!2sar!4v1685809188863!5m2!1ses!2sar"
					width='100%'
					height='300px'
					style={{marginTop: '10px'}}
					allowFullScreen="true"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"/>
			</Grid>
			<Grid item xs={11.5} md={11.5} lg={5.8} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<iframe
					title='Av Luro 3435'
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.2566057292997!2d-57.557587398412814!3d-37.9944747229428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584deaa93727267%3A0x412e44746fb5723a!2sAv.%20Pedro%20Luro%203435%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1685809348716!5m2!1ses!2sar"
					width='100%'
					style={{marginTop: '10px'}}
					height='300px'
					allowFullScreen="true"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"/>
			</Grid>
		</Grid>
	)
}

export default Mapas;