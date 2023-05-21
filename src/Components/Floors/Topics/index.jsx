import React, { useState } from 'react';
import s from './Topics.module.scss';

//Material UI
import {
	Grid,
} from '@mui/material';
import DetailModal from '../../Detail';

const cards = [
		{image: 'https://www.storehaus.com.ar/wp-content/uploads/moderno-piso-flotante-storehaus.jpg', topic: 'Pisos Flotantes', section:'Pisos'},
		{image: 'https://http2.mlstatic.com/D_NQ_NP_880942-MLA27185939225_042018-O.jpg', topic: 'Decks Madera', section:'Pisos'},
		{image: 'https://www.vierabinet.com/v1/wp-content/uploads/2019/05/decks-coextrusion-vierabinet-09.jpg', topic: 'Decks WPC', section:'Pisos'},
]

const FloorTopics = () => {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState(null)

	return(
		<Grid item xs={12} container className={s.topicscontainer}>
			<Grid item container xs={12} className={s.cards}>
				{
					cards.map((item, i) => (
						<Grid key={i} item container xs={2.8} className={s.card} onClick={() => {
							setOpen(true);
							setData(item);
						}}>
							<Grid item xs={12} className={s.imageContainer}>
								<img src={item?.image} alt={item?.topic} className={s.image}/>
							</Grid>
							<Grid item xs={12} className={s.topic}>
								<p>{item?.topic}</p>
								<p className={s.more}>Información</p>
							</Grid>
						</Grid>
					))
				}
			</Grid>
			{open ? <DetailModal open={open} setOpen={setOpen} data={data}/> : null}
		</Grid>
	)
}

export default FloorTopics;