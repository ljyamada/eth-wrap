// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WagmiProvider } from './providers/WagmiProvider';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
    <React.StrictMode>
        <WagmiProvider>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </WagmiProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
