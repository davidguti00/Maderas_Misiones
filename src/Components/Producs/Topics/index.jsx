import React, { useState } from 'react';
import s from './Topics.module.scss';

//Material UI
import {
	Grid,
} from '@mui/material';
import DetailModal from '../../Detail';

const cards = [
		{image: 'https://production-masisa.s3.amazonaws.com/pim/b/e/f/f/beff2a818ae0bb2d1d31882420b7d33495888365_Tableros_Recubiertos_1000x330.jpg', topic: 'Tablero Melanizado Eurodekor'},
		{image: 'https://pathwoodsmart.com/wp-content/uploads/2021/12/tableros-MDF.jpg', topic: 'Tablero MDF'},
		{image: 'https://edimca.com.ec/assets/images/products/madera/venta-madera-alistonada-edimca-guayaquil.jpg', topic: 'Tablero Madera Listonada'},
		{image: 'https://maderamen.com.ar/dyf-muebles/wp-content/uploads/sites/4/2018/03/paneles.jpg', topic: 'Tableros Enchapados Natural'},
		{image: 'https://www.madereralobos.com.ar/images/productos/759.jpg', topic: 'Tableros Alveolares'},
		{image: 'https://i0.wp.com/icasasecologicas.com/wp-content/uploads/2018/01/tablero-laminado.jpg', topic: 'Laminados'},
		{image: 'https://elgalponmaderas.com.ar/wp-content/uploads/2018/11/1.5.1-IMG-Chapadur-1.jpg', topic: 'Chapadur'},
		{image: 'https://www.emporiodelterciado.com.ar/uploads/media/Multimedia/0001/01/thumb_301_Multimedia_medium.jpeg', topic: 'Terciados'},
		{image: 'https://http2.mlstatic.com/D_602865-MLA42063990300_062020-O.jpg', topic: 'Herrajes'},
		{image: 'https://edimca.com.ec/assets/images/products/adhesivos/venta-de-adhesivos-para-madera-en-edimca.jpg', topic: 'Adhesivos'},
		{image: 'https://cantisa.es/wp-content/uploads/2020/03/rNH5_2923-W.jpg', topic: 'Cantos'},
		{image: 'https://www.vierabinet.com/v1/wp-content/uploads/2019/05/revestimientos-madera-pared-interiores-entablonado-vierabinet-01.jpg', topic: 'Revestimiento'},
		{image: 'https://elgalponmaderas.com.ar/wp-content/uploads/2018/11/IMG-Molduras-1.jpg', topic: 'Molduras'},
]

const Topics = () => {
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

export default Topics;