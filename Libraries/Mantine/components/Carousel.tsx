import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Box } from '@mantine/core';

import { Carousel } from '@mantine/carousel';

const Slide = ({ children }: any) => (
  <Carousel.Slide>
    <Box bg="blue" h="100%">
      {children}
    </Box>
  </Carousel.Slide>
);

export function Carouself() {
  return (
    <Carousel
      height={200}
      dragFree
      slideGap="md"
      align="start"
      slideSize="33%"
      containScroll="trimSnaps"
    >
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
    </Carousel>
  );
}
