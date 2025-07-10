import { Carousel } from '@mantine/carousel';
import { Card, Image } from '@mantine/core';
import '@mantine/carousel/styles.css';
import classes from "./carousel.module.css";

const slides = [ // TODO make this dynamic
  'page1.webp',
  'page2.webp',
  'page3.webp',
  'page4.webp',
  'page5.webp',
  'page6.webp',
  'page7.webp',
  'page8.webp',
  'page9.webp',
  'page10.webp',
  'page11.webp',
  'page12.webp',
  'page13.webp',
  'page14.webp',
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
      className={classes.card}
    >
      <Card.Section>
        <Image src={`${import.meta.env.BASE_URL}assets/portfolio/${image}`} width="100%" height="auto" />
      </Card.Section>
    </Card>
  );
}

export default function CarouselComponent() {
  return (
    <Carousel
      withControls
      slideSize="90%"
      slideGap="md"
      withIndicators
      className={classes.carousel}
    >
      {slides.map((image) => (
        <Carousel.Slide key={image}>
          <Slide image={image} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
