import { createBrowserRouter } from 'react-router';
import RootLayout from './layouts/root';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: () => 'Apps Discovery' },
      { path: '/inventory', Component: () => 'Inventory' },
      { path: '/settings', Component: () => 'Settings' },
    ],
  },
]);

export default router;
