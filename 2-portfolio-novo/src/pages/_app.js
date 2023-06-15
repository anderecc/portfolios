import storeConfig from '@/store/storeConfig';
import '@/styles/globals.sass';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
    return (
        <Provider store={storeConfig}>
            <Component {...pageProps} />
        </Provider>
    );
}
