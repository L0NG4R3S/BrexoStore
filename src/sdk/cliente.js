import { post, setAxiosAuthorization, get, put, del } from "./api";

export const login = ({ email, password }) => {
  return post("customer_api/session", { email, password })
    .then(({ data }) => {
      setAxiosAuthorization(data?.session?.token);
      console.log("TOKEN LOGIN", data?.session?.token);
      return data;
    })
    .catch((err) => {
      console.log("Login error", err);
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
  state,
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
    state,
  })
    .then(({ data }) => {
      if (data?.session?.token) {
        setAxiosAuthorization(data?.session?.token);
        console.log("TOKEN REGISTER", data?.session?.token);
      }
      return data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const buscarProdutosParaCliente = () => {
  return get("customer_api/product")
    .then(({ data }) => {
      console.log("buscarProdutos", data);
      return data;
    })
    .catch((err) => {
      console.log("buscarProdutos error", err);

      throw new Error(err.message);
    });
};

export const purchase = ({ value, product_id, discount }) => {
  return post("customer_api/order", {
    product_id,
    value,
    discount,
  })
    .then(({ data }) => {
      console.log("data purchase", data);
      return data;
    })
    .catch((err) => {
      console.log("error purchase", err);
      throw new Error(err.message);
    });
};

export const addComent = ({ content, product_id }) => {
  return post("customer_api/comment", {
    content,
    product_id,
  })
    .then(({ data }) => {
      console.log("data", data);
      return data;
    })
    .catch((err) => {
      console.log("erro", err);
      throw new Error(err.message);
    });
};

export const editComment = ({ id, content }) => {
  console.log("id, content", id, content);
  return put(`customer_api/comment/${id}`, { content })
    .then(({ data }) => {
      console.log("editarComentario", data);
      return data;
    })
    .catch((err) => {
      console.log("editarComentario error", err);

      throw new Error(err.message);
    });
};

export const deletarComentario = ({ id }) => {
  return del(`customer_api/comment/${id}`)
    .then(({ data }) => {
      console.log("deletarComentario", data);
      return data;
    })
    .catch((err) => {
      console.log("deletarComentario error", err);

      throw new Error(err.message);
    });
};
