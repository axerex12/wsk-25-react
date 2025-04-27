import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useEffect} from 'react';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext(); // Fixed the destructuring of user and handleAutoLogin

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div>
      <header>
        <h1 className ='text-3xl font-extrabold m-4'>My App</h1>
        <nav className ='m-4'>
          <ul className="flex justify-end overflow-hidden bg-stone-900">
            <li>
              <Link className="block p-4 text-center text-stone-50 hover:bg-stone-600" to="/">
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    className="block p-4 text-center text-stone-50 hover:bg-stone-600"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-stone-50 hover:bg-stone-600"
                    to="/upload"
                  >
                    Upload
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-stone-50 hover:bg-stone-600"
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="block p-4 text-center text-stone-50 hover:bg-stone-600"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
