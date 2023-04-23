import React from 'react'
import s from './DetailModal.module.scss';

//materialUi
import {
    Grid,
    Modal,
    Button
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';


const DetailModal = ({open, setOpen, data}) => {

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
        <Grid container>
            <Grid xs={12} md={10} lg={10} item container className={s.boxModal} sx={{ bgcolor: "#EEEEEE" }}>
               <Grid container item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                  <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center", alignItems: 'center'}}>
                     <img src={data.image} alt={data.topic} style={{width: '95%', height: '95%', objectFit: 'cover', boxShadow: '0 0 10px -3px rgba(0, 0, 0, 0.311)', borderRadius: '5px'}}/>
                  </Grid>
                  <Grid item container xs={12} md={6} lg={6} sx={{p: 3}}>
                     <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end', height: '5%'}}>
                        <CloseIcon onClick={() => setOpen(false)} sx={{transition: '.3s', '&:hover': {scale: '1.1', cursor: 'pointer'}}}/>
                     </Grid>
                     <Grid item xs={12} sx={{height: '85%'}}>
                        <h4>{data.topic}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla nunc massa, non porta magna aliquet cursus. Praesent facilisis scelerisque magna, a facilisis magna blandit a. Nullam nec orci sapien. Nunc ultricies orci in erat blandit posuere et vel lorem. Aenean ac pharetra metus, sit amet tincidunt ante.</p>
                     </Grid>
                     <Grid item xs={12} sx={{height: '10%'}}>
                        <Button variant='contained' color='error'>
                           <p style={{margin: 0, textAlign: 'start', fontSize: '0.8rem', fontWeight: 400}}>Consultar</p>
                           <ChevronRightIcon/>
                        </Button>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
        </Grid>
    </Modal>
    )
};

export default DetailModal;