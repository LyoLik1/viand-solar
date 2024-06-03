import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'

export const Default: FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
