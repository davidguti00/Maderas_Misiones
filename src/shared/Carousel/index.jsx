import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import landingbkg from '../../assets/landingimg.jpg';
import landing2bkg from '../../assets/landing2img.jpg';
import landing3bkg from '../../assets/landing3img.jpg';
import landing4bkg from '../../assets/landing4img.jpg';

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
       {/* <div>
         <img src={landingbkg} alt='bakg1' style={{width: '100%', maxHeight: '95vh', objectFit: 'cover'}}/>
       </div> */}
       <div>
         <img src={landing2bkg} alt='bakg2' style={{width: '100%', maxHeight: '95vh', objectFit: 'cover'}}/>
       </div>
       <div>
         <img src={landing3bkg} alt='bakg3' style={{width: '100%', maxHeight: '95vh', objectFit: 'cover'}}/>
       </div>
       <div>
         <img src={landing4bkg} alt='bakg4' style={{width: '100%', maxHeight: '95vh', objectFit: 'cover'}}/>
       </div>
     </Carousel>
   );
 }

 export default ImageCarousel