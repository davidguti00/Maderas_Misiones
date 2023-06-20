import React from 'react';
import s from './contact.module.scss';

//Material
import {
   Grid,
   Box
} from '@mui/material'
import FormNormal from './Forms/FormNormal';

const Contact = () => {


   return (
		<Grid container className={s.container} id='contact'>
			<Grid item xs={1} className={s.linecontainer}>
				<Box className={s.line1}></Box>
					<p>09</p>
				<Box className={s.line2}></Box>
				<Box className={s.line3}></Box>
			</Grid>

			<Grid item container xs={11} className={s.content}>
            <FormNormal/>
			</Grid>
		</Grid>
   )
}

export default Contact;