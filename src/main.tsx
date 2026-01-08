import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ResumeDataProvider } from './contexts/ResumeDataContext.tsx';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <ResumeDataProvider>
        <App />
      </ResumeDataProvider>
    </Suspense>
  </React.StrictMode>,
)
