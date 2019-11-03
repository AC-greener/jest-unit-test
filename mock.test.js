import { runCallback, fetchData2 } from './mock.js'
import axios from'axios'

jest.mock('axios')
/*
1，捕获函数的调用
2，可以自由设置返回结果
3，改变函数内部实现
*/
test('回调函数', () => {
  //测试函数是否调用
  const f = jest.fn(() => {
    return 123
  })
  f.mockReturnValue('old pig')
  runCallback(f)
  runCallback(f)
  expect(f.mock.calls.length).toBe(2)
  console.log(f.mock)
})

//发送一个假的ajax。改变了ajax函数的内部实现，变成同步
test(' axios 是否发送', async () => {
  axios.get.mockResolvedValue({data: 'hello'})
  // const res = await fetchData2()
  expect(await fetchData2()).toEqual({'data': 'hello'})
})