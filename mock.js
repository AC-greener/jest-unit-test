import axios from 'axios'
export const runCallback = (callback) => {
  callback()
}

export const fetchData2 =(fn) => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}
