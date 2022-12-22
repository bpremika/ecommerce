import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

function BannerCarousel() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      sx={{ maxWidth: '100%'}}
      mx="auto"
      withIndicators
      height={650}
      plugins={[autoplay.current]}
      loop
      align="start"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide><div style={{position: 'relative'}}>
            <button style={{position:'absolute' ,top:'500px',left:'600px'}}>shop now</button>
            <img 
              src="/banner.png"
              alt=""
              style={{ width: '100%', height: 750, objectFit: 'cover' }}/>
            </div>
            </Carousel.Slide>
      <Carousel.Slide><img
              src="https://cdn.pomelofashion.com/img/homepage/slider/20221219122515_639ff5bb5ad67_desktop.jpg?auto=compress,format&fm=webp,jpg,png&w=1906.5&h=1072.5"
              alt=""
              style={{ width: '100%', height: 650, objectFit: 'cover' }}
            /></Carousel.Slide>
      <Carousel.Slide><img
              src="https://cdn.pomelofashion.com/img/homepage/slider/20221108115058_6369e03214e68_desktop.jpg?auto=compress,format&fm=webp,jpg,png&w=1906.5&h=1072.5"
              alt=""
              style={{ width: '100%', height: 650, objectFit: 'cover' }}
            /></Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
export default BannerCarousel