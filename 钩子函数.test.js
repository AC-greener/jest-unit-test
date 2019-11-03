import { Counter } from './钩子函数'

let counter = null
beforeAll(() => {
 
})
afterAll(() => {
 
})
beforeEach(() => {
  console.log(1)
  counter = new Counter()
})
afterEach(() => {
})

//descibe用来分组， 每一个descibe都可以有自己的钩子函数
describe('测试增加相关的代码', () => {
  beforeEach(() => {
    console.log(222)
  })
  test('counter add方法', () => {
    counter.add()
    expect(counter.number).toBe(1)
  })
})

test('counter minus方法', () => {
  counter.minus()
  expect(counter.number).toBe(-1)
})