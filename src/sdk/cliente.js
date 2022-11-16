import { post, setAxiosAuthorization } from "./api";

export const login = ({ email, password }) => {
  return post("customer_api/session", { email, password })
    .then(({ data }) => {
      setAxiosAuthorization(data.session.token);
      console.log("TOKEN LOGIN", data.session.token);
      return data;
    })
    .catch((err) => {
      console.log('Login error', err)
      throw new Error(err.message);
    });
};

export const register = ({
  name,
  email,
  password,
  password_confirmation,
  cpf,
  zip_code,
  address,
  address_number,
  address_district,
  city,
  state
}) => {
  return post("customer_api/customer", {
    name,
    email,
    password,
    password_confirmation,
    cpf,
    zip_code,
    address,
    address_number,
    address_district,
    city,
    state
  })
    .then(({ data }) => {
      if(data?.session?.token){
        setAxiosAuthorization(data.session.token);
        console.log("TOKEN REGISTER", data.session.token);
      }
      return data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};
