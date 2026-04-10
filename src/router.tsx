import { createBrowserRouter } from 'react-router';
import Root from './layouts/root';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: () => 'Apps Discovery' },
      { path: '/inventory', Component: () => 'Inventory' },
      { path: '/settings', Component: () => 'Settings' },
    ],
  },
]);

export default router;
