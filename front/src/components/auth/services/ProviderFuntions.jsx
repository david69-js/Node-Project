export const SendAndRegisterUser = (data, Redirectuser, ErrorRedirect) => {
    fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(res => {
            localStorage.setItem('token', res.accessToken)
            if (res.message === 'success') return (Redirectuser());
            (ErrorRedirect());
        }).catch(error => {
            console.error(error);
        });
}

export const loginUser = (data, Redirectuser, ErrorRedirect) => {
    fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(res => {
            localStorage.setItem('token', res.accessToken)
            localStorage.setItem('us', res.user)
            if (res.message === 'success') return (Redirectuser());
            (ErrorRedirect());
        }).catch(error => {
            console.error(error);
        });
}
