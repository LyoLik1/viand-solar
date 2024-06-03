import { createBrowserRouter } from 'react-router-dom'
import { Default } from './layouts/Default/Default'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ContactsPage } from './pages/ContactsPage/ContactsPage'
import { HomePage } from './pages/HomePage/HomePage'
import { OffersPage } from './pages/OffersPage/OffersPage'
import { ROUTES } from './Routes'

export const Router = createBrowserRouter([
    {
        element: <Default />,
        children: [
            {
                path: ROUTES.HOME,
                element: <HomePage />
            },
            {
                path: ROUTES.ABOUT,
                element: <AboutPage />
            },
            {
                path: ROUTES.OFFERS,
                element: <OffersPage />
            },
            {
                path: ROUTES.CONTACTS,
                element: <ContactsPage />
            }
        ]
    }
])
