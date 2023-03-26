import React from 'react';
import { AnimesAPIProvider } from "./useAnimes.tsx/useAnimes";

type Props = {
  children?: React.ReactNode
};

const AppProvider: React.FC<Props> = ({ children }) => (
  <AnimesAPIProvider>
    {children}
  </AnimesAPIProvider>
);

export default AppProvider;