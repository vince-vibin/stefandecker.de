import { Carousel } from '@mantine/carousel';
import { Card, Image } from '@mantine/core';
import '@mantine/carousel/styles.css';

const slides = [
  {
    image: 'page1.png',
  },
  {
    image: 'page2.png',
  },
  {
    image: 'page3.png',
  },
  {
    image: 'page4.png',
  },
  {
    image: 'page5.png',
  },
  {
    image: 'page6.png',
  },
  {
    image: 'page7.png',
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
        <Image src={`${import.meta.env.BASE_URL}assets/${image}`} width="100%" height="auto" />
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
