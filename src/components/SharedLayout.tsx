import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import { Suspense } from 'react';

const SharedLayout: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default SharedLayout