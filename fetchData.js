import axios from 'axios'
export const fetchData1 =(fn) => {
  axios.get('http://www.dell-lee.com/react/api/demo.json')
    .then(res => {
      fn(res.data)
    })
}
export const fetchData2 =(fn) => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}