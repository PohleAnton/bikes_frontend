import axios from "axios";
import {store} from "@/assets/store";


let refresh=false;

axios.interceptors.response.use(resp => resp, async error => {

  if (error.response.status === 401&&!refresh){
    refresh=true;
    const response = await axios.post('refresh', {}, {withCredentials:true});

    if (response.status ===200){
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      store.log = true;
      return axios(error.config);
    } else{
      store.log = false;
    }
  }
  return error;
});
