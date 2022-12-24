import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import type { FC } from 'react';
import MainHeader from '~/components/navigation/MainHeader';
import marketingStyles from '~/styles/marketing.css';

const MarketingLayout: FC = () => {
    return (
        <>
            <MainHeader />
            <Outlet />;
        </>
    );
};

export default MarketingLayout;

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: marketingStyles }];
};
