import React from 'react';
import { Routes, Route } from 'react-router-dom'; // React Router for routing
import { ThemeProvider } from 'src/theme/theme-provider'; // Custom theme provider
import Fab from '@mui/material/Fab'; // Floating Action Button
import { Iconify } from 'src/components/iconify'; // Iconify component for GitHub icon
import { useScrollToTop } from 'src/hooks/use-scroll-to-top'; // Custom hook for scroll behavior
import 'src/global.css'; // Global CSS styles

// Import components first
import Sidebar from 'src/components/Sidebar'; // Sidebar component
import LoginPage from './pages/LoginPage'; // Login page component
import StudentsPage from './pages/StudentsPage'; // Students page component

// ----------------------------------------------------------------------

// GitHub button component
const githubButton = (
  <Fab
    size="medium"
    aria-label="Github"
    href="https://github.com/minimal-ui-kit/material-kit-react"
    sx={{
      zIndex: 9,
      right: 20,
      bottom: 20,
      width: 44,
      height: 44,
      position: 'fixed',
      bgcolor: 'grey.800',
      color: 'common.white',
    }}
  >
    <Iconify width={24} icon="eva:github-fill" />
  </Fab>
);

const App: React.FC = () => {
  useScrollToTop(); // Scroll to top on route change

  return (
    <ThemeProvider>
      {/* Sidebar rendered globally */}
      <Sidebar />                             
        
      {/* Define the routes for different pages */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
        
      {/* GitHub button always visible */}
      {githubButton}
    </ThemeProvider>
  );
}

export default App; 










