import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { MainContainer } from './Layout.style';

export const Layout = () => {
  return (
    <div>
      <AppBar/>
      <MainContainer>
        <Suspense
          fallback={
            <div>
             <p>Loading...</p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
        </MainContainer>
    </div>
  );
};
