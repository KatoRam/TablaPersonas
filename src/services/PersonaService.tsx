import http from "../../http-common";
import IPersona from "../types/IPersona";

const getAll = () => {
  return http.get<Array<IPersona>>("/persona");
};

const get = (id: any) => {
  return http.get<IPersona>(`/persona/${id}`);
};

const create = (data: IPersona) => {
  return http.post<IPersona>("/persona", data);
};

const update = (data: IPersona) => {
  return http.put<any>(`/persona`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/persona/${id}`);
};

/*const removeAll = () => {
  return http.delete<any>(`/persona`);
};*/

// const findByTitle = (title: string) => {
//   return http.get<Array<IPersona>>(`/persona?title=${title}`);
// };

const personaService = {
  getAll,
  get,
  create,
  update,
  remove,
  //   removeAll,
  //   findByTitle,
};

export default personaService;