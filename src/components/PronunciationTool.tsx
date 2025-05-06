import { Button, Typography, Box } from '@mui/material';
import { useState } from 'react';


interface PronunciationToolProps {
  word: string;
  nativeAudio: string;
}


const PronunciationTool: React.FC<PronunciationToolProps> = ({ word, nativeAudio }) => {
  const [recording, setRecording] = useState(false);


  const handleRecord = () => {
    setRecording(!recording);
    // Placeholder for Web Audio API integration
  };


  return (
    <Box>
      <Typography variant="h6">Practice: {word}</Typography>
      <Button variant="contained" sx={{ mr: 2 }} onClick={() => new Audio(nativeAudio).play()}>
        Play Native
      </Button>
      <Button variant="contained" color={recording ? 'secondary' : 'primary'} onClick={handleRecord}>
        {recording ? 'Stop Recording' : 'Record'}
      </Button>
    </Box>
  );
};


export default PronunciationTool;