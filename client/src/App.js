import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Form } from './components/Form';
import { Post } from './components/Post';
import { TopNav } from './components/TopNav';

function App() {
  return (
    <Container maxWidth="md">
      <TopNav />
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <Post />
        <Form />
      </Box>

    </Container>

  );
}

export default App;
