import { post, setAxiosAuthorization, get, del } from './api';

export const login = ({ email, password }) => {
  return post('api/session', { email, password })
    .then(({ data }) => {
      setAxiosAuthorization(data?.session?.token)
      console.log('TOKEN LOGIN BREXO', data?.session?.token)
      return data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const buscarProdutos = () => {
  return get('api/product')
    .then(({ data }) => {
      console.log('buscarProdutos', data)
      return data;
    })
    .catch((err) => {
      console.log('buscarProdutos error', err)

      throw new Error(err.message);
    });
};

export const deletarProduto = ({id}) => {
  return del(`api/product/${id}`)
    .then(({ data }) => {
      console.log('deletarProduto', data)
      return data;
    })
    .catch((err) => {
      console.log('deletarProduto error', err)

      throw new Error(err.message);
    });
};

export const registerUser = ({
  name,
  email,
  password,
  password_confirmation,
}) => {
  return post("api/user", {
    name,
    email,
    password,
    password_confirmation,
  })
    .then(({ data }) => {
      if(data?.session?.token){
        setAxiosAuthorization(data?.session?.token);
        console.log("TOKEN REGISTER USER", data?.session?.token);
      }
      return data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const register = ({
  name,
  email,
  phone,
  address,
  address_number,
  address_district,
  city,
  state
}) => {
  return post("api/store", {
    name,
    email,
    phone,
    address,
    address_number,
    address_district,
    city,
    state
  })
    .then(({ data }) => {
      if(data?.session?.token){
        setAxiosAuthorization(data?.session?.token);
        console.log("TOKEN REGISTER", data?.session?.token);
      }
      return data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const registerProduto = ({ name, description, type, value, store_id }) => {
  return post('api/product', { name, description, type, value, store_id })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};