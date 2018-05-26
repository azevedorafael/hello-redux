const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
    }

    return state
}

//TDD

console.assert(
    counter(0, { type: 'INCREMENT' }) === 1, 'STATE=0 + 1 = 1'
)

console.assert(
    counter(1, { type: 'INCREMENT' }) === 2, 'STATE=1 + 1 = 2'
)

console.assert(
    counter(2, { type: 'DECREMENT' }) === 1, 'STATE=2 - 1 = 1'
)

console.assert(
    counter(5, { type: 'DECREMENT' }) === 4, 'STATE=5 - 1 = 4'
)

console.assert(
    counter(3, { type: 'SOMETHING' }) === 3, 'STATE=3 - 0 = 3'
)

console.assert(
    counter(undefined, {}) === 0, 'STATE=undefined = 0'
)