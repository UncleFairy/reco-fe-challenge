import { createBrowserRouter } from 'react-router';

import RootLayout from './layouts/root';
import { AppsDiscovery, AppsInventory, Settings } from './pages';
import { ROUTES } from './consts';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: AppsDiscovery },
      { path: ROUTES.INVENTORY, Component: AppsInventory },
      { path: ROUTES.SETTINGS, Component: Settings },
    ],
  },
]);

export default router;
