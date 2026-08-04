import { describe, expect, it } from 'vitest'
import sum from '../sum'

describe('sum 함수 테스트', () => {
  it('입력한 파라미터의 합계가 반환된다', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1, 2, 3)).toBe(6)
    expect(sum(-1, 1)).toBe(0)
    expect(sum()).toBe(0)
  })

  it('string 타입의 파라미터가 number로 치환 가능할 경우에도 입력한 파라미터의 합계가 반환된다', () => {
    expect(sum(1, 2, '3', 4, '5')).toBe(15)
    expect(sum('0', 0)).toBe(0)
    expect(sum('0', 0, 1)).toBe(1)
  })

  it('number 타입 혹은 string 인데 number 타입으로 치환할 수 없는 값이 들어온다면 NaN이 반환된다.', () => {
    expect(sum(1, '', 2)).toBeNaN()
    expect(sum(1, [], 2)).toBeNaN()
    expect(sum(1, {}, 2)).toBeNaN()
    expect(sum(NaN)).toBeNaN()
    expect(sum(NaN, 1)).toBeNaN()
    expect(sum(null)).toBeNaN()
    expect(sum(null, 1)).toBeNaN()
    expect(sum(1, null)).toBeNaN()
    expect(sum(undefined)).toBeNaN()
    expect(sum(undefined, 1)).toBeNaN()
    expect(sum(1, undefined)).toBeNaN()
  })
})
