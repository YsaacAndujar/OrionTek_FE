import axios from "axios";
import { showModal } from "utils/modal";


const removeLogin = () =>{
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
}

export const setupAxios = (): void => {
  const genericErroMsg = 'Unkown error. Check your network and try later.'
    axios.interceptors.response.use(
      (resp) => {
        
        const totalEntities=resp.headers["totalentities"]
        const totalPages=resp.headers["totalpages"]
        if(totalEntities && totalPages){
          return {
            totalEntities: parseInt(totalEntities),
            totalPages: parseInt(totalPages),
            data: resp.data
          }
        }
        return resp.data;
      },
      (error) => {
        if(!error.response){
          showModal({title: 'Unkown error.', text:genericErroMsg, type:'error'})
          return Promise.reject(error)
        }
        const { data,status } = error.response
        if(status === 401){
            removeLogin()
          return Promise.reject(error);
        }
        showModal({title: 'Error', text: data.message || genericErroMsg, type:'error'})
        return Promise.reject(error);
      }
    );

    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }