import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';


const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Quick Stats
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Streak: 5 days" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Words Learned: 120" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Lessons Completed: 8" />
        </ListItem>
      </List>
    </Drawer>
  );
};


export default Sidebar;