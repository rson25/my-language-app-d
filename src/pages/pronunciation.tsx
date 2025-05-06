import { Container, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PronunciationTool from '../components/PronunciationTool';


const PronunciationPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Container sx={{ mt: 4, ml: 30 }}>
          <Typography variant="h4" gutterBottom>
            Pronunciation Practice
          </Typography>
          <PronunciationTool word="Hola" nativeAudio="/audio/hola.mp3" />
        </Container>
      </Box>
    </>
  );
};


export default PronunciationPage;