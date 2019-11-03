import { fetchData1, fetchData2 } from './fetchData'

// test('测试fetchData1', (done) => {
//   //只有调用了done才证明测试用例结束了
//   fetchData1((data) => {
//     expect(data).toEqual({success: true})
//     done()
//   })
// })

// // 返回promise异步函数的测试 方法1
// test('测试fetchData2', () => {
//   return fetchData2().then((res) => {
//     expect(res.data).toEqual({success: true})
//   })
// })
//返回promise异步函数的测试 方法2
test('测试fetchData2', () => {
  return expect(fetchData2()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})
//返回promise异步函数的测试 方法3
test('测试fetchData2', async () => {
  await expect(fetchData2()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

//返回promise异步函数的测试 方法4
test('测试fetchData2', async () => {
  const res = await fetchData2()
  expect(res.data).toEqual({
    success: true
  })

})

// 测试404  期待至少执行一个expect语句
// test('返回404', () => {
//   expect.assertions(1)
//   return fetchData2().catch(e => {
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })

// test('404', () => {
//   return expect(fetchData2()).rejects.toThrow()
// })

// test('404', async () => {
//   await expect(fetchData2()).rejects.toThrow()
// })