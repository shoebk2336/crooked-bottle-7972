import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 600,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({cards}) {
    console.log('card',cards[0])

  // As we have used custom buttons, we need a reference variable to
  // change the state
//   const [slider, setSlider] = React.useState<Slider | null>(null);
const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
   cards=cards[0]
//   const cards = [
//     {
//       title: 'Fusion',
//       image:'https://assets.ajio.com/cms/AJIO/WEB/22012023-UHP-D-TopBanner-P6-Winterwear-GAP-Upto25.jpg'
//     },
//     {
//       title: 'Fusion',
//    image:"https://assets.ajio.com/cms/AJIO/WEB/22012023-UHP-D-DailyBanner-P2-UpgradeYourJacketsCollection-FortCollinsUSPA-4060.jpg"
        
    
//     },
//     {
//       title: 'Fusion',
//       image:'https://assets.ajio.com/cms/AJIO/WEB/22012023-UHP-D-DailyBanner-P4-BeingHuman-Min60.jpg'
     
//     },
//   ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'400px'}
            
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container  size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                
              
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}