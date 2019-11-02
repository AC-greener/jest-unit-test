function expect(result) {
  return {
    toBe: function(actual) {
      if (result !== actual) {
        throw new Error(`预期值和实际值不一样。 预期：${result} 实际：${actual}`)
      }
    }
  }
}

function test(desc, fn) {
  try {
    fn()
    console.log(`${desc} 通过测试`)
  } catch (e) {
    console.log(`${desc} 没有通过测试 ${e}`)
  }
}

test('', () => {

})

