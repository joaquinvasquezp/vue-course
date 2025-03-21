let timer;

export default {
    async login(context, payload) {
        context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });
    },
    async signup(context, payload) {
        context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });
    },
    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        context.commit('setUser', {
            token: null,
            userId: null,
        });
    },
    async auth(context, payload) {
        const mode = payload.mode;
        const API_KEY = '';
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

        if (mode === 'signup') {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
        }

        const response = await fetch(
            url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true // always be true (part of the Firebase API)
                })
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to authenticate. Check your login data.');
            throw error;
        }

        const expiresIn = +responseData.expiresIn * 1000; // added + first to convert string to number
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        });
    },
    tryLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }

        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn);

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
            });
        }
    },
    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
};