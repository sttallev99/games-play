const baseURL = 'http://localhost:3030/data';

export function getAll() {
    return fetch(`${baseURL}/games?sortBy=_createdOn%20desc`)
    .then(res => res.json())
}

export function getOne(id) {
    return fetch(`${baseURL}/games/${id}`)
        .then(res => res.json())
}