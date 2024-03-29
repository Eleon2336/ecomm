import { 
  Box,
  Container, 
  ThemeProvider, 
  Typography
} from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/Appbar/Appbar';
import Banner from './components/Banner/Banner';
import Promotions from './components/Promotions/Promotions';
import Products from './components/Products/Products';

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
        <Box display={"flex"} justifyContent={"center"} sx={{ p: 4 }}>
          <Typography variant='h4'>
            Our Products
          </Typography>
        </Box>
        <Products />
        {
          /*
         
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
