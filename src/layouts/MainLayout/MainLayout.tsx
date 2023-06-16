import DrawerAppBar from '@/organisms/Navbar';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
import { FC } from 'react';

export interface mainInterface {
    children: React.ReactElement | React.ReactNode;
    title: string;
}
// eslint-disable-next-line react/function-component-definition
const MainLayout: FC<mainInterface> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Alfredo Herrera" />
                <meta
                    name="description"
                    content="Informacion sobre el contacto"
                />
                <meta name="keywords" content={`${title},`} />
            </Head>

            <main>
                <Grid container>
                    <Grid item md={12}>
                        <DrawerAppBar />
                    </Grid>
                    <Grid item md={12}>
                        {children}
                    </Grid>
                </Grid>
            </main>
        </>
    );
};

export default MainLayout;
