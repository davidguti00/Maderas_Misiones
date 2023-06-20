import { Carousel } from 'react-responsive-carousel';
import s from './styles.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageCarousel({images, detail}) {
   return (
     <Carousel
       autoPlay={true}
       interval={4500}
       infiniteLoop={true}
       showArrows={detail ? true : false}
       showStatus={false}
       showThumbs={false}
       transitionTime={1000}
       className={s.container}
     >
      {
        images?.length ?
        images?.map((item, i) => (
          <div>
            <img src={item} key={i} alt={`Background${i}`} style={{ objectFit: 'cover', width: detail ? '90%' : '100%', height: detail ? '100%' : '95vh'}}/>
          </div>
        )) : null
      }
     </Carousel>
   );
 }

 export default ImageCarousel