import axios from "../utils/axiosCustomize";

const postCreateUser = (email, password, userName, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", userName);
  data.append("role", role);
  data.append("userImage", image);

  return axios.post("api/v1/participant", data);
};
const deleteUser = (id) => {
  console.log(id);
  return axios.delete("api/v1/participant", { data: { id: id } });
};

const putUpdateUser = (id, userName, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", userName);
  data.append("role", role);
  data.append("userImage", image);

  return axios.put("api/v1/participant", data);
};

const getListUser = () => {
  return axios.get("api/v1/participant/all");
};

export { postCreateUser, getListUser, putUpdateUser, deleteUser };