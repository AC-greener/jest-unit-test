test('测试对象相等', () => {
  const a = {name : 1}
  expect(a).toEqual({name: 1})
})

test('to be null', () => {
  const a = null
  expect(a).toBeNull()
})

test('to be undefined', () => {
  const a = undefined
  expect(a).toBeUndefined()
})

test('to be defined', () => {
  const a = 1
  expect(a).toBeDefined()
})

test('to be True', () => {
  const a = 1
  expect(a).toBeTruthy()
})

test('to be Falsy', () => {
  const a = null
  expect(a).toBeFalsy()
})

test('to be Greater', () => {
  const a = 10
  expect(a).toBeGreaterThan(9)
})
test('to be GreaterThanOrEqual', () => {
  const a = 10
  expect(a).toBeGreaterThanOrEqual(10)
})

test('to be Less', () => {
  const a = 8
  expect(a).toBeLessThan(9)
})

test('to be CloseTo', () => {
  const a = 0.1
  const b = 0.2
  expect(a + b).toBeCloseTo(0.3)
})


// String
test('to Match', () => {
  const a = 'hello world js'
  expect(a).toMatch('hello')
})

//Array, Set
test('to Contain', () => {
  const a = [1, 2, 3]
  expect(a).toContain(2)
})

//异常
const errorFn = () => {
  throw new Error('error')
}

test('to throw', () => {
  expect(errorFn).toThrow()
})