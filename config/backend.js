export const backendConfig = {
    routes: {
        users: {
            get: '/users',
            get_one: '/users/:id',
            // post: '/users',
            patch: '/users/:id',
            delete: '/users/:id'
        },
        auth: {
            login: '/users/login',
            register: '/users/register'
        }
    }
}