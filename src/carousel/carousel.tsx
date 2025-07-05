import { Carousel } from '@mantine/carousel';
import { Card, Image } from '@mantine/core';
import '@mantine/carousel/styles.css';

const slides = [
  'page1.png',
  'page2.png',
  'page3.png',
  'page4.png',
  'page5.png',
  'page6.png',
  'page7.png',
];

type SlideProps = {
  image: string;
};

function Slide({ image }: SlideProps) {
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
      mx="auto"
      maw={1500}
      withControls
      slideSize="90%"
      slideGap="md"
      withIndicators
    >
      {slides.map((image) => (
        <Carousel.Slide key={image}>
          <Slide image={image} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
