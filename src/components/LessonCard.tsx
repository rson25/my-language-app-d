import { Card, CardContent, Typography, Button } from '@mui/material';


interface LessonCardProps {
  title: string;
  completed: boolean;
}


const LessonCard: React.FC<LessonCardProps> = ({ title, completed }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography color="textSecondary">
          {completed ? 'Completed' : 'In Progress'}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          {completed ? 'Review' : 'Start'}
        </Button>
      </CardContent>
    </Card>
  );
};


export default LessonCard;