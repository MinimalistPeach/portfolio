import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/tailwind.css'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <I18nextProvider i18n={i18n}>
      <Suspense fallback='loading'>
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>
)
