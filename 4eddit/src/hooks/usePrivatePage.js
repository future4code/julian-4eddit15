import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const usePrivatePage = () => {
    const history = useHistory();

    useLayoutEffect( () => {
        const token = localStorage.getItem("token");

        if(token === null) {
            history.push("/login");
        }
    }, [history])
}