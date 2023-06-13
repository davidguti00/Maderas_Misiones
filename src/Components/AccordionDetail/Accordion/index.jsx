import React from 'react';
import s from './Accordion.module.scss';

import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItem = ({data, setSelected}) => {
	return (
		<Accordion sx={{mb: 1}}>
			<AccordionSummary
				onClick={() => setSelected(data?.image)}
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				sx={{margin: 0, p: 0, px: 2, height: '5vh'}}
			>
				<p>{data.title}</p>
			</AccordionSummary>
			<AccordionDetails sx={{margin: 0, pl: 2, pt: 1}}>
				<Grid container sx={{width: '100%'}}>
					<Grid item xs={12} sx={{fontSize: '0.8rem'}}>
						<p>{data.description}</p>
					</Grid>
					<hr width='100%'/>
					<Grid item container xs={12}>
						{
							data.options.map((item, i) => (
								<Grid item container xs={11} key={i}>
									<Grid item xs={12} sx={{fontWeight: 500}}>
										<p>{item.title}</p>
									</Grid>
									{
										item.items.map((dato, k) => (
											<Grid item xs={2} key={k} sx={{position: 'relative', height: '5rem', mr: 1}} className={s.option}>
												<p style={{position: 'absolute', top: '45%', fontSize: '0.8rem', width: '100%', textAlign: 'center', justifyContent: 'center', color: '#EEEEEE'}}>{dato.info}</p>
												<img src={dato.image} alt={dato.info} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
											</Grid>
										))
									}
								</Grid>
							))
						}
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	)
}

export default AccordionItem;