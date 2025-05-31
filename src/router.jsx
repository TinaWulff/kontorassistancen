import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import Home from './pages/Home';
import Ydelser from './pages/Ydelser';
import Lonkorsel from './pages/Lonkorsel';
import Momsregnskab from './pages/Momsregnskab';
import OnlineBogforing from './pages/OnlineBogforing';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Tak from './pages/Tak';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/ydelser',
                element: <Ydelser />
            },
            {
                path: '/Lonkorsel',
                element: <Lonkorsel />
            },
            {
                path: '/Momsregnskab',
                element: <Momsregnskab />
            },
            {
                path: '/OnlineBogforing',
                element: <OnlineBogforing />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'tak',
                element: <Tak />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);
export default router;