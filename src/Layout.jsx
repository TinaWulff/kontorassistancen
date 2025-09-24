
import { Outlet } from 'react-router';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './Styles/style.scss';

function Layout() {
 
  return (
    <>
<Header />

<main>
<Outlet />
</main>

<footer>
    <Footer />
 <small>© 2025 Tina Wulff</small>
</footer>
    </>
  )
}

export default Layout
