const FRUITS = {
    APPLE: {name: '사과', count: 1},
    PEAR: {name: '배', count: 3},
    GRAPE: { name: '포도', count: 7},
}

export function getFruitName(fruitKey) {
    return FRUITS[fruitKey]?.name ?? null
}

export function getFruitCount(fruitKey) {
    return FRUITS[fruitKey]?.count ?? null
}