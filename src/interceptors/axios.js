import axios from "axios";
import {store} from "@/assets/store";

axios.interceptors.response.use(resp => resp, async error => {

  if (error.response.status === 400){
    const response = await axios.post('http://localhost:8080/api/refresh', {}, {withCredentials:true});

    if (response.status ===200){
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`
      store.log = true;
      return axios(error.config);
    } else{

      store.log = false;
    }
  }
  return error;
});
