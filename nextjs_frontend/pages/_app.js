import '../styles/index.css';
import HistoryContext from '../hooks/useRouteHistory';

export default function MyApp({ Component, pageProps }) {
  return (
    <HistoryContext>
      <Component {...pageProps} />
    </HistoryContext>
  )
}
