
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './Styles/style.scss';


function Layout() {
 


  return (
    <>
<Header />

 <ScrollToTop />

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


