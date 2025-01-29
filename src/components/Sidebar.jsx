import React from 'react';
import { Link } from 'react-router-dom'; // Ensure that Link is correctly imported from 'react-router-dom'
import { Box, List, ListItem, ListItemText } from '@mui/material'; // Ensure that MUI components are imported

export default function Sidebar() {
  return (
    <Box sx={{ width: 250, height: '100%', bgcolor: '#3f51b5', color: 'white' }}>
      <List>
        {/* Students Link */}
        <ListItem button component={Link} to="/students">
          <ListItemText primary="Students" />
        </ListItem>

        {/* Logout Link */}
        <ListItem button component={Link} to="/">
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
}


