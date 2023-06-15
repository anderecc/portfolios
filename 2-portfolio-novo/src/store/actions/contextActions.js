import axios from 'axios';
import { CONTEXT_SET_LOADING, CONTEXT_SET_MESSAGE } from '../types';

export const contextSetLoading = (value) => (dispatch) => {
    dispatch({ type: CONTEXT_SET_LOADING, payload: value });
};

export const contextSetMessage = (message) => (dispatch) => {
    // message deve vir em forma de objeto com {text: '', success: '', error: '', visible: ''}
    dispatch({ type: CONTEXT_SET_MESSAGE, payload: message });

    setTimeout(() => {
        dispatch({
            type: CONTEXT_SET_MESSAGE,
            payload: {
                text: '',
                success: false,
                error: false,
                visible: false,
            },
        });
    }, 3000);
};

export const contextSendMessage = (values, setMessage) => (dispatch) => {
    dispatch(contextSetLoading(true));
    axios
        .post('/api/sendEmail', { ...values })
        .then(() => {
            dispatch(
                contextSetMessage({
                    text: 'Sua mensagem foi enviada com sucesso.',
                    success: true,
                    error: false,
                    visible: true,
                })
            );
            setMessage({ name: '', email: '', text: '' });
            dispatch(contextSetLoading(false));
        })
        .catch(() => {
            dispatch(
                contextSetMessage({
                    text: 'Ocorreu algum erro ao tentar enviar sua mensagem.',
                    success: false,
                    error: true,
                    visible: true,
                })
            );
            dispatch(contextSetLoading(false));
        });
};
