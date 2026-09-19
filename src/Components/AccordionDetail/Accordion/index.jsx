import React, { useId } from 'react';
import ProductContent from '../../ProductContent';

import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItem = ({data, setSelected}) => {
	const id = useId();
	return (
		<Accordion sx={{mb: 1}}>
			<AccordionSummary
				onClick={() => setSelected(data?.image)}
				expandIcon={<ExpandMoreIcon />}
				aria-controls={`${id}-content`}
				id={`${id}-header`}
				sx={{margin: 0, p: 0, px: 2, minHeight: '5vh'}}
			>
				<p>{data.title}</p>
			</AccordionSummary>
			<AccordionDetails sx={{margin: 0, pl: 2, pt: 1}}>
				<Grid container><Grid item xs={12} sx={{fontSize: '0.9rem'}}><ProductContent data={data}/></Grid></Grid>
			</AccordionDetails>
		</Accordion>
	)
}

export default AccordionItem;