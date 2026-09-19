import React, { useState } from 'react';
import s from './Topics.module.scss';
import ProductImage from '../../../shared/ProductImage';

//Material UI
import {
	Grid,
} from '@mui/material';
import DetailModal from '../../Detail';
import AccordionDetail from '../../AccordionDetail';
import eggerFloors from '../../../data/floors-egger.json';

const cards = [
		eggerFloors,
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
						<Grid key={i} item container lg={2.8} md={5.5} xs={10} className={s.card} role="button" tabIndex={0} aria-label={`Ver ${item.topic}`} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(true); setData(item); } }} onClick={() => {
							setOpen(true);
							setData(item);
						}}>
							<Grid item xs={12} className={s.imageContainer}>
								<ProductImage src={item?.image} alt={item?.topic} className={s.image}/>
							</Grid>
							<Grid item xs={12} className={s.topic}>
								<p>{item?.topic}</p>
								<p className={s.more}>Información</p>
							</Grid>
						</Grid>
					))
				}
			</Grid>
			{open && (data.accordeonItems ? (
                <AccordionDetail open={open} setOpen={setOpen} data={data}>
                    <p style={{fontSize: '0.9rem', lineHeight: 1.65}}>Familias de la Colección de Pisos 25+ de EGGER. Consultanos por las líneas, formatos y diseños que podemos ofrecerte para tu proyecto.</p>
                    <p style={{fontSize: '0.9rem'}}><a href="https://www.egger.com/es/pisos/busqueda-disenos?country=AR" target="_blank" rel="noreferrer" style={{color: 'inherit'}}>Ver diseños de la colección EGGER ↗</a></p>
                </AccordionDetail>
            ) : <DetailModal open={open} setOpen={setOpen} data={data}/>)}
		</Grid>
	)
}

export default FloorTopics;
