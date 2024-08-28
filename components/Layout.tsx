// components/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './navbar';
import { Provider } from 'react-redux';
import { persistor, store } from '@/lib/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <main>{children}</main>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
