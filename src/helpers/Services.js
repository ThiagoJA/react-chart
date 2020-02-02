import axios from 'axios';

export const GetEmployees = (setFunc) => {
  axios.get('https://node-employees.herokuapp.com/employees').then(res => setFunc(res))
  return void 0;
}

export const PostEmployees = (params, handleChange) => {
  handleChange(true)
  axios.post('https://node-employees.herokuapp.com/employees', params).then(() => {handleChange(false)})
  return void 0;
}
