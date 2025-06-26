import { MantineProvider, createTheme, type MantineColorsTuple } from '@mantine/core';
import '@mantine/core/styles.css';
import CarouselComponent from './carousel/carousel';

const myColor: MantineColorsTuple = [
  '#fcf6e7',
  '#f2ebda',
  '#e1d6b9',
  '#d0bf94',
  '#c1ac74',
  '#b89f60',
  '#b49954',
  '#9e8544',
  '#8d7639',
  '#7a652b'
];

const theme = createTheme({
  colors: {
    myColor,
  }
});

export default function App() {
  return <MantineProvider theme={theme}>
    {
      <div style={{ maxWidth: 800, margin: 'auto', padding: '20px' }}>
        <CarouselComponent />
      </div>
    }
    </MantineProvider>;
}
