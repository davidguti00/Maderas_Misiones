import React, { useState } from 'react';
import s from './Topics.module.scss';

//Material UI
import {
	Grid,
} from '@mui/material';
import DetailModal from '../../Detail';

const cards = [
		{image: 'https://www.laviruta.com/resources/img/products/876f441b6012c47e8801f3c8da8ccfc1.jpg', topic: 'Fenolicos', section: 'Construcción'},
		{image: 'https://www.insumasur.com/wp-content/uploads/2022/06/Placa-OSB0.jpg', topic: 'Tableros OSB', section: 'Construcción'},
		{image: 'https://www.saltus.com.ar/wp-content/uploads/2014/12/tabla.jpg', topic: 'Maderas para obra', section: 'Construcción'},
		{image: 'https://decandidocarpinteros.com/wp-content/uploads/2018/03/techos-de-madera-machimbres-sin-nudos.jpg', topic: 'Techos', section: 'Construcción'},

]

const ConstructionTopics = () => {
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
			{open ? <DetailModal open={open} setOpen={setOpen} data={data} dark={true}/> : null}
		</Grid>
	)
}

export default ConstructionTopics;