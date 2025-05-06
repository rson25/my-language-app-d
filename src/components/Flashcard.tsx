import { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';


interface FlashcardProps {
  front: string;
  back: string;
}


const Flashcard: React.FC<FlashcardProps> = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);


  return (
    <Card sx={{ mb: 2, cursor: 'pointer' }} onClick={() => setFlipped(!flipped)}>
      <CardContent>
        <Typography variant="h5">{flipped ? back : front}</Typography>
        <Button variant="outlined" sx={{ mt: 2 }}>
          Mark as Known
        </Button>
      </CardContent>
    </Card>
  );
};


export default Flashcard;