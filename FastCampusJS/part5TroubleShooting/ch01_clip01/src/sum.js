export default function sum(...values) {
    // - `string` 타입으로 들어온 파라미터의 경우 `number`로 치환할수 있다면 `number`로 치환한다.
    // 아무런 파라미터가 들어오지 않았을 경우에는 0을 반환한다.
    // 예외 처리 - 기대하지 않은 값이 들어올 경우 Nan을 반환함.

    let sum = 0
    for (let value of values) {
        if (
            (typeof value === 'string' && value.length && !isNaN(+value)) ||
            typeof value === 'number'
        )
        sum += +value
        else return NaN
    }

    return sum
//    return values.reduce((acc, cur) => acc + cur, 0)
}