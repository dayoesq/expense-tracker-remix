import type { LinksFunction } from '@remix-run/node';
import type { FC } from 'react';
import AuthForm from '~/components/auth/AuthForm';
import authStyles from '~/styles/auth.css';

const AuthPage: FC = () => {
    return <AuthForm />;
};

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: authStyles }];
};

export default AuthPage;
