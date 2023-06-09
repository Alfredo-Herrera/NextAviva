import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Head from 'next/head';
import { FC } from 'react';
import { ContainerBody } from './styles';

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
        <meta name="description" content="Informacion sobre el contacto" />
        <meta name="keywords" content={`${title},`} />
      </Head>

      <main>
        <Grid container>
          <Grid item md={12}>
            {/* <DashboardHeader isCollapse={false} onOpenSidebar={() => {}} /> */}
          </Grid>
          <Toolbar />
          <ContainerBody container>{children}</ContainerBody>
        </Grid>
      </main>
    </>
  );
};

export default MainLayout;
