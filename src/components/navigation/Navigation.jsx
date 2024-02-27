import styles from './Navigation.module.scss';
import { Outlet, Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <div className={styles.navigation}>
        <Link className={styles.link} to='profile'>
          Profile
        </Link>
        <Link className={styles.link} to='chat'>
          Chat
        </Link>
      </div>
      <Outlet />
    </>
  );
};
