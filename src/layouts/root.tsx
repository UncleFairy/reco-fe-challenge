import { Link, NavLink, Outlet } from 'react-router';
import { SIDEBAR_ITEMS } from '../consts';

const RootLayout = () => {
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <Link to="/" className="text-[64px] font-bold leading-none text-lime-500">
              reco
            </Link>
          </li>
          {SIDEBAR_ITEMS.map((item) => (
            <li key={item.label}>
              <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="drawer-content">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
