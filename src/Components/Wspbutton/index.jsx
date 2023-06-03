import React from 'react';
import s from './Wps.module.scss';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Wspbutton = () => {
	return (
		<a className={s.container} href={'https://wa.link/jfv4mt'} target='_blank' rel="noreferrer">
			<WhatsAppIcon sx={{fontSize: '2.3rem'}}/>
		</a>
	)
}

export default Wspbutton;