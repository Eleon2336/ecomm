import { 
  Button, 
  Container, 
  ThemeProvider 
} from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/Appbar/Appbar';

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
        {
          /*
          Banner
          Promotions
          Title
          Products
          Footer
          (hidden) Searchbox
          (hidden) Appdrawer
          */
        }
        <Button variant='contained'>Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
