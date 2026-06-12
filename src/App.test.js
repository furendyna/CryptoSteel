// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoSteel title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoSteel/i);
    expect(titleElement).toBeInTheDocument();
});
