import { Container, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Flashcard from '../components/Flashcard';


const flashcards = [
  { id: 1, front: 'Hola', back: 'Hello' },
  { id: 2, front: 'Adiós', back: 'Goodbye' },
];


const VocabularyPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Container sx={{ mt: 4, ml: 30 }}>
          <Typography variant="h4" gutterBottom>
            Vocabulary Review
          </Typography>
          {flashcards.map((card) => (
            <Flashcard key={card.id} front={card.front} back={card.back} />
          ))}
        </Container>
      </Box>
    </>
  );
};


export default VocabularyPage;