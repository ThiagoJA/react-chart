import axios from 'axios';

export const GetEmployees = (setFunc) => {
  axios.get('https://node-employees.herokuapp.com/employees').then(res => setFunc(res))
  return void 0;
}

export const PostEmployees = (params) => {
  axios.post('https://node-employees.herokuapp.com/employees', params)
  setTimeout(()=>{
    window.location.reload();

  },1000)
  return void 0;
}
