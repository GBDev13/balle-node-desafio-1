import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles/global';
import { Toaster } from 'react-hot-toast'
import { Home } from './pages/Home';

ReactDOM.render(
<React.StrictMode>
      <Home />
      <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          fontSize: 16,
          fontWeight: 600
        },
        error: {
          iconTheme: {
            primary: '#fff',
            secondary: '#f26b8a',
          },
          style: {
            background: '#f26b8a',
            color: '#fff'
          }
        },
        success: {
          iconTheme: {
            primary: '#fff',
            secondary: '#ADCAFF',
          },
          style: {
            background: '#ADCAFF',
            color: '#fff'
          }
        }
      }}
      />
      <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
)
