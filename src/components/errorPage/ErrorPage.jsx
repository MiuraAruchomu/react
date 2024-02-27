import { Navigation } from '../navigation/Navigation';
import styles from './ErrorPage.module.scss';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navigation />
      <div className={styles.error_page}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};
