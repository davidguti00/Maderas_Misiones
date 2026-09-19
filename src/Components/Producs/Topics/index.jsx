import React, { useState } from 'react';
import s from './Topics.module.scss';
import ProductImage from '../../../shared/ProductImage';

//Material UI
import {
	Grid,
} from '@mui/material';
import DetailModal from '../../Detail';

//data
import cards from './info';
import AccordionDetail from "../../AccordionDetail";

const Topics = () => {
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
			{open ? data?.accordeon ? <AccordionDetail open={open} setOpen={setOpen} data={data}/> : <DetailModal open={open} setOpen={setOpen} data={data}/> : null}
		</Grid>
	)
}

export default Topics;