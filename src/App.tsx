import { Divider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import CarouselComponent from './carousel/carousel';
import { TitleComponent } from './title/title';
import { FooterComponent } from './footer/footer';


const portfolioSlides = [
  'portfolio/page1.webp',
  'portfolio/page2.webp',
  'portfolio/page3.webp',
  'portfolio/page4.webp',
  'portfolio/page5.webp',
  'portfolio/page6.webp',
  'portfolio/page7.webp',
  'portfolio/page8.webp',
  'portfolio/page9.webp',
  'portfolio/page10.webp',
  'portfolio/page11.webp',
  'portfolio/page12.webp',
  'portfolio/page13.webp',
  'portfolio/page14.webp',
];

const photographySlides = [
  'photography/page1.webp',
  'photography/page2.webp',
  'photography/page3.webp',
  'photography/page4.webp',
  'photography/page5.webp',
  'photography/page6.webp',
  'photography/page7.webp',
  'photography/page8.webp',
  'photography/page9.webp',
  'photography/page10.webp',
  'photography/page11.webp',
  'photography/page12.webp',
  'photography/page13.webp',
  'photography/page14.webp',
  'photography/page15.webp',
  'photography/page16.webp',
  'photography/page17.webp',
  'photography/page18.webp',
  'photography/page19.webp',
  'photography/page20.webp',
  'photography/page21.webp',
];

export default function App() {
  return (
    <MantineProvider >
      <div style={{ margin: 'auto', padding: '20px' }}>
        <TitleComponent />
        <CarouselComponent images={portfolioSlides}/>
        <Divider my="xl" />
        <CarouselComponent images={photographySlides} />
        <FooterComponent />
      </div>
    </MantineProvider>
  );
}
