import { post, setAxiosAuthorization } from './api';

export const login = ({ email, password }) => {
  return post('session', { email, password })
    .then(({ data }) => {
      setAxiosAuthorization(data.session.token)
      console.log('TOKEN LOGIN', data.session.token)
      return data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const register = ({ name, email, password, password_confirmation }) => {
  return post('user', { name, email, password, password_confirmation })
    .then(({ data }) => {
      setAxiosAuthorization(data.session.token)
      console.log('TOKEN REGISTER', data.session.token)
      return data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};