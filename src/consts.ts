interface SidebarItem {
  label: string;
  path: string;
}

export const ROUTES = {
  DISCOVERY: '/',
  INVENTORY: '/inventory',
  SETTINGS: '/settings',
} as const;

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: 'Apps Discovery', path: ROUTES.DISCOVERY },
  { label: 'Apps Inventory', path: ROUTES.INVENTORY },
  { label: 'Settings', path: ROUTES.SETTINGS },
];

