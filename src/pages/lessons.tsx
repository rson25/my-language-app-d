import { Container, Grid, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import LessonCard from '../components/LessonCard';


const lessons = [
  { id: 1, title: 'Basic Greetings', completed: true },
  { id: 2, title: 'Numbers & Counting', completed: false },
  { id: 3, title: 'Daily Activities', completed: false },
];


const LessonsPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Container sx={{ mt: 4, ml: 30 }}>
          <Typography variant="h4" gutterBottom>
            Interactive Lessons
          </Typography>
          <Grid container spacing={3}>
            {lessons.map((lesson) => (
              <Grid item xs={12} sm={6} md={4} key={lesson.id}>
                <LessonCard title={lesson.title} completed={lesson.completed} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};


export default LessonsPage;