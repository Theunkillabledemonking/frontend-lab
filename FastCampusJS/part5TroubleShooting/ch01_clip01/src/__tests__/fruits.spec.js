import { describe, expect, it } from 'vitest'
import { getFruitName, getFruitCount } from '../fruits'

describe('fruits 테스트', () => {

    it('getFruitName 에 fruitKey 파라미터를 넣으면 과일 이름이 나온다.', () => {
        expect(getFruitName('APPLE')).toBe('사과'),
        expect(getFruitName('PEAR')).toBe('배'),
        expect(getFruitName('GRAPE')).toBe('포도')
    })

    it('getFruitName에 유효하지 않은 fruitKey 파라미터를 넣으면 `null`이 반환된다.', () => {
        expect(getFruitName()).toBeNull()
        expect(getFruitName('사과')).toBeNull()
        expect(getFruitName('Apple')).toBeNull()
        expect(getFruitName('Oragne')).toBeNull()
        expect(getFruitName(1234)).toBeNull()
        expect(getFruitName([])).toBeNull()
        expect(getFruitName({})).toBeNull()
    })
})
