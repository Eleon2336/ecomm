import { 
  Container, 
  ThemeProvider 
} from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/Appbar/Appbar';
import Banner from './components/Banner/Banner';
import Promotions from './components/Promotions/Promotions';

function App() {
  useEffect(() => {
    document.title = "Ecomm - Home";
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff"
        }}
      >
        <Appbar />
        <Banner />
        <Promotions />
        {
          /*
          Title
          Products
          Footer
          (hidden) Searchbox
          (hidden) Appdrawer
          */
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;
