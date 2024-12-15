import '../styles/global.css';
import { ThemeProvider } from '../context/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}