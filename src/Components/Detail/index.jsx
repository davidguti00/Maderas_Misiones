import React from 'react'
import s from './DetailModal.module.scss';

//assets
import logo from '../Navbar/assets/darklogo.png';
import logow from '../Navbar/assets/whitelogo.png';

//materialUi
import {
    Grid,
    Modal,
    Button,
    Link
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import ImageCarousel from '../../shared/Carousel';


const DetailModal = ({open, setOpen, data, dark}) => {

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
        <Grid container>
            <Grid xs={12} md={10} lg={10} item container className={s.boxModal} sx={{ bgcolor: dark ? "#222222" : "#EEEEEE" }}>
               <Grid container item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                  <Grid item container xs={12} md={12} lg={12} sx={{p: 2}}>
                     <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 1, mt: 2}}>
                        <img src={dark ? logow : logo} alt='logo' height='30rem'/>
                        <CloseIcon onClick={() => setOpen(false)} sx={{color: dark ? '#EEEEEE' : "#222222", transition: '.3s', '&:hover': {scale: '1.1', cursor: 'pointer'}}}/>
                     </Grid>

                     <Grid item container xs={12} className={s.content}>
                        <Grid item xs={12} md={6} lg={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className={s.modalImagen}>
                           { data.carrousel ?
                              <ImageCarousel images={data.images} detail/>
                              : <img src={data.image} alt={data.topic} width='100%' height='90%' style={{objectFit: 'cover', borderRadius: '5px'}}/>
                           }
                        </Grid>
                        <Grid item container xs={12} lg={6} md={6} sx={{justifyContent: 'flex-start', alignItems: 'flex-start', p: 2}} className={s.modalTexto}>
                           <Grid item container xs={12}>
                              <Grid item xs={12} sx={{mt: 3}}>
                                 <h4 style={{fontWeight: '500', opacity: '0.8', margin: 0, color: dark ? '#EEEEEE' : '#222222'}}>{data.section}</h4>
                                 <h4 style={{margin: 0, color: dark ? '#EEEEEE' : '#222222'}}>{data.topic}</h4>
                              </Grid>
                              <Grid item xs={12} sx={{pt: 3}}>
                                 <p style={{fontWeight: 300, margin: 0, color: dark ? '#EEEEEE' : '#222222', textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit, nulla auctor pharetra posuere, velit diam tincidunt turpis, id tincidunt mauris elit sit amet tortor. Pellentesque faucibus elit ligula, ullamcorper pharetra dolor dapibus eget. Curabitur vitae sollicitudin ipsum. Sed lacinia blandit magna, ut maximus ipsum mattis non.</p>
                              </Grid>
                              <Grid item xs={12} sx={{mt: 6}}>
                                 <Link href='#contact' sx={{textDecoration: 'none'}}>
                                    <Button variant='contained' color='error' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => setOpen(false)}>
                                       <p style={{margin: 0, marginTop: '2px'}}>Consultar</p>
                                       <ChevronRightIcon/>
                                    </Button>
                                 </Link>
                                 {
                                    data?.multipleButtons?.length ? 
                                    data?.multipleButtons?.map((button, i) => (
                                       <Link key={i} href={button?.link} target='_blank' sx={{textDecoration: 'none'}}>
                                          <Button  variant='contained' color='error' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1}}>
                                             <p style={{margin: 0, marginTop: '2px'}}>{button?.title}</p>
                                             <ChevronRightIcon/>
                                          </Button>
                                       </Link>
                                    )) : null
                                 }
                              </Grid>
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
        </Grid>
    </Modal>
    )
};

export default DetailModal;