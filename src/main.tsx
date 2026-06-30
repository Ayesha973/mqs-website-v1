import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error(
        'Root element missing. Cannot initialize React application.'
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <h1> This is the main </h1>
    </StrictMode>
);
