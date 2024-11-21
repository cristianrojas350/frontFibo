import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ClockProvider } from './context/ClockContext';
import FibonacciGenerator from './components/FibonacciGenerator';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#FF5722',
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ClockProvider>
        <ThemeProvider theme={theme}>
          <div className="App">
            <h1>Generador de Serie Fibonacci</h1>
            <FibonacciGenerator />
          </div>
        </ThemeProvider>
      </ClockProvider>
    </Provider>
  );
};

export default App;
