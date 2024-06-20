// src/components/layout/index.tsx
import { Outlet } from 'react-router-dom';
import NavBar from '../nav-bar';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        <span>React Coffee Shoppi - todos os direitos reservados</span>
      </footer>
    </>
  )
}

export default Layout;
