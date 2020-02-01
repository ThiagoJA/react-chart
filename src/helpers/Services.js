import axios from 'axios';

export const GetEmployees = (setFunc) => {
  axios.get('http://localhost:3000/employees').then(res => setFunc(res))
  return void 0;
}

export const PostEmployees = (params) => {
  axios.post('http://localhost:3000/employees', params)
  window.location.reload();
  return void 0;
}
