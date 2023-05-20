import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import landingbkg from '../../assets/landingimg.jpg';
import landing2bkg from '../../assets/landing2img.jpg';
import landing3bkg from '../../assets/landing3img.jpg';
import landing4bkg from '../../assets/landing4img.jpg';
import landing5bkg from '../../assets/landing5img.jpg';
import landing6bkg from '../../assets/landing6img.jpg';
import landing7bkg from '../../assets/landing7img.jpg';

function ImageCarousel() {
   return (
     <Carousel
       autoPlay={true}
       interval={4500}
       infiniteLoop={true}
       showArrows={false}
       showStatus={false}
       showThumbs={false}
       transitionTime={1000}
     >
       <div>
         <img src={landingbkg} alt='bakg1' style={{width: '100%', height: '95vh', objectFit: 'cover'}}/>
       </div>
       <div>
         <img src={landing2bkg} alt='bakg2' style={{width: '100%', height: '95vh', objectFit: 'cover'}}/>
       </div>
       <div>
         <img src={landing3bkg} alt='bakg3' style={{width: '100%', height: '95vh', objectFit: 'cover'}}/>
       </div>
       <div>
         <img src={landing4bkg} alt='bakg4' style={{width: '100%', height: '95vh', objectFit: 'cover'}}/>
       </div>
       <div>
         <img src={landing5bkg} alt='bakg5' style={{width: '100%', height: '95vh', objectFit: 'cover'}}/>
       </div>
       <div>
         <img src={landing6bkg} alt='bakg6' style={{width: '100%', height: '95vh', objectFit: 'cover'}}/>
       </div>
       <div>
         <img src={landing7bkg} alt='bakg7' style={{width: '100%', height: '95vh', objectFit: 'cover'}}/>
       </div>
     </Carousel>
   );
 }

 export default ImageCarousel