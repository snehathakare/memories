import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Form } from './components/Form';
import { Post } from './components/Post';
import { TopNav } from './components/TopNav';
import { getPosts } from './actions/post'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())

  }, [dispatch])

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
