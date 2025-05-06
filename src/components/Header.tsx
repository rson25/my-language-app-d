import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';


const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LanguageMaster
        </Typography>
        <Box>
          <Link href="/lessons" passHref>
            <Button color="inherit">Lessons</Button>
          </Link>
          <Link href="/vocabulary" passHref>
            <Button color="inherit">Vocabulary</Button>
          </Link>
          <Link href="/pronunciation" passHref>
            <Button color="inherit">Pronunciation</Button>
          </Link>
          <Link href="/progress" passHref>
            <Button color="inherit">Progress</Button>
          </Link>
          <Button color="inherit">Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};


export default Header;