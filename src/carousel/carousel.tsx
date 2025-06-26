import { Carousel } from '@mantine/carousel';
import { Card, Image } from '@mantine/core';
import '@mantine/carousel/styles.css';

const slides = [
  {
    image: '../../assets/page1.png',
  },
  {
    image: '../../assets/page2.png',
  },
  {
    image: '../../assets/page3.png',
  },
  {
    image: '../../assets/page4.png',
  },
  {
    image: '../../assets/page5.png',
  },
  {
    image: '../../assets/page6.png',
  },
  {
    image: '../../assets/page7.png',
  },
];

function Slide({ image }: { image: string }) {
  return (
    <Card 
      shadow="md" 
      radius="md" 
      padding="lg" 
      withBorder
    >
      <Card.Section>
        <Image src={image} width="100%" height="auto" />
      </Card.Section>
    </Card>
  );
}

export default function CarouselComponent() {
  return (
    <Carousel
      slideSize="100%"
      slideGap="md"
      withIndicators
    >
      {slides.map((slide, index) => (
        <Carousel.Slide key={index}>
          <Slide {...slide} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
