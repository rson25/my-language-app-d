import { Card, CardContent, Typography, LinearProgress } from '@mui/material';


const ProgressDashboard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Your Progress</Typography>
        <Typography>Lessons Completed: 8/20</Typography>
        <LinearProgress variant="determinate" value={40} sx={{ my: 2 }} />
        <Typography>Proficiency: Intermediate</Typography>
      </CardContent>
    </Card>
  );
};


export default ProgressDashboard;