

const SumsInArray = (arr, arg) => arr
    .reduce((accu, num, idx) => {
        if (num < arg) {
            const item = accu.find(item => item.num === num)
            if (!item) {
                accu.push({
                    idxs: [idx],
                    num
                })
            }
            else if (item.idxs.length < 2) {
                item.idxs.push(idx)
            }
        }
        return accu
    }, [])
    .sort((a, b) => a.num - b.num)
    .reduce((accu, item1, idx, _arr) => {
        if (item1.num < arg * .5) {
            const item2 = _arr.find(item => item.num + item1.num === arg && item.idxs.length > 0)
            if (item2) {
                while (item1.idxs.length && item2.idxs.length) {
                    accu += item1.idxs.shift() + item2.idxs.shift()
                }
            }
        }
        else if (item1.num === arg * .5 && item1.idxs.length === 2) {
            accu += item1.idxs.reduce((a, b) => a + b)
        }
        return accu
    }, 0)

export default SumsInArray