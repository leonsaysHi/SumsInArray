import SumsInArray from './src/SumsInArray.js'

const test = (arr, arg) => console.log(
    '---------------\n',
    arr, '\n',
    arg, '\n',
    'Results: ' + SumsInArray(arr, arg),
    '***************\n'
)

test([3, 4, 3, 7, 2], 10)

test([10, 20, 5, 5, 100], 10)

test([1, 9, 10, 5, 20, 5, 5, 100, 9], 10)