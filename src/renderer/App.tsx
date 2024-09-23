import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { BaseStyles, Button, ThemeProvider } from '@primer/react';

function Hello() {
  return (
    <Button>Click me</Button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Router>
          <Routes>
            <Route path="/" element={<Hello />} />
          </Routes>
        </Router>
      </BaseStyles>
    </ThemeProvider>
  )
}
