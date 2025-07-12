import { Carousel } from '@mantine/carousel';
import { Card, Image } from '@mantine/core';
import '@mantine/carousel/styles.css';
import classes from "./carousel.module.css";

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
        <Image src={`${import.meta.env.BASE_URL}assets/${image}`} width="100%" height="auto" alt={image}/>
      </Card.Section>
    </Card>
  );
}

type CarouselComponentProps = {
  images: string[];
};

export default function CarouselComponent({ images }: CarouselComponentProps) {
  return (
    <Carousel
      withControls
      slideSize="90%"
      slideGap="md"
      withIndicators
      className={classes.carousel}
    >
      {images.map((image) => (
        <Carousel.Slide key={image}>
          <Slide image={image} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
