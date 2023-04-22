import React from 'react';
import s from './Landing.module.scss';

//assests
import landingbkg from '../../assets/landingimg.jpg';
import ReactPlayer from 'react-player';

//Material UI
import {
	Grid,
	Box,
 Button,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Landing = () => {

	return(
		<Grid container className={s.container}>
				<img src={landingbkg} alt="landingImg" className={s.background}/>

    <Grid item container xs={12} className={s.content}>

     <Grid item xs={1} className={s.linecontainer}>
       <p>01</p>
       <Box className={s.line}></Box>
     </Grid>

     <Grid item xs={9} container className={s.header}>
      <Grid item xs={12} className={s.title}>
       <p style={{fontWeight: 300}}>WE BUILD</p>
       <p style={{fontWeight: 600}}>STRONGER</p>
       <p style={{fontWeight: 300}}>FUTURE</p>
      </Grid>
      <Grid item xs={12} className={s.slogan}>
          <p>Building stronger future, one steel beam at a time.</p>
      </Grid>
      <Grid item lg={3} md={5} xs={12} sx={{mt: 3}}>
        <Button variant='contained'>
         <p style={{margin: 0, textAlign: 'start', fontSize: '0.8rem', fontWeight: 400}}>start collaborating</p>
         <ChevronRightIcon/>
        </Button>
      </Grid>
     </Grid>

      <Grid item xs={12} className={s.player}>
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=7-4yOx1CnXE'
          width={'100%'} 
          height={'100%'}
          volume={0.2}
          controls
          light
          style={{zIndex: 5}}
          playIcon={<PlayArrowIcon sx={{transition:'0.3s', fontSize: '6rem', color: '#222222','&:hover': {fontSize: '6.4rem'}}}/>}
        />
      </Grid>

    </Grid>
		</Grid>
	)
}

export default Landing;