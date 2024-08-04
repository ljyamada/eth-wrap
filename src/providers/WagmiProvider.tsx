// src/WagmiProvider.tsx
import React from 'react';
import { WagmiConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Create a QueryClient instance
const queryClient = new QueryClient();

// @ts-ignore
const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
        [mainnet.id]: http('https://mainnet.example.com'),
        [sepolia.id]: http('https://sepolia.example.com'),
    },
})
export const WagmiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        <WagmiConfig config={config}>{children}</WagmiConfig>
    </QueryClientProvider>
);
