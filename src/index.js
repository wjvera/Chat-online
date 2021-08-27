import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


import ChatProvider from './Context/ChatProvider' //exportas el componente del provider

ReactDOM.render(
  <React.StrictMode>

      <ChatProvider> 
          <App />
      </ChatProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
