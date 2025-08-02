import { createTheme } from '@mui/material/styles';

// Red color palette theme
const redTheme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',        // Primary red
      light: '#ff6659',       // Light red
      dark: '#9a0007',        // Dark red
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f44336',        // Secondary red  
      light: '#ff7961',       // Light secondary red
      dark: '#ba000d',        // Dark secondary red
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      color: '#d32f2f',
    },
    h2: {
      fontWeight: 600,
      color: '#d32f2f',
    },
    h3: {
      fontWeight: 600,
      color: '#d32f2f',
    },
    h4: {
      fontWeight: 600,
      color: '#d32f2f',
    },
    h5: {
      fontWeight: 600,
      color: '#d32f2f',
    },
    h6: {
      fontWeight: 600,
      color: '#d32f2f',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#d32f2f',
          '&:hover': {
            backgroundColor: '#9a0007',
          },
        },
        outlinedPrimary: {
          borderColor: '#d32f2f',
          color: '#d32f2f',
          '&:hover': {
            borderColor: '#9a0007',
            backgroundColor: 'rgba(211, 47, 47, 0.04)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#d32f2f',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#d32f2f',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(211, 47, 47, 0.1)',
        },
      },
    },
  },
});

export default redTheme;
