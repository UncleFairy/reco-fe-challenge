interface SidebarItem {
  label: string;
  path: string;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: 'Apps Discovery', path: '/' },
  { label: 'Apps Inventory', path: '/inventory' },
  { label: 'Settings', path: '/settings' },
];
