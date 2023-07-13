import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<div>loading</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
  </React.StrictMode>,
)
