

const SumsInArray = (arr, arg) => arr
    .reduce((accu, num, idx) => {
        const sameNum = accu.filter(item => item.num === num)
        if (num < arg && sameNum.length < 2) {
            accu.push({
                idx,
                num,
                used: false
            })
        }
        return accu
    }, [])
    .sort((a, b) => a.num - b.num)
    .reduce((accu, item1, idx, _arr) => {
        const item2 = _arr
            .slice(idx + 1)
            .find(_item => !_item.used && _item.num + item1.num === arg)
        if (item2) {
            console.log(item1, item2)
            item2.used = true
            accu += item1.idx + item2.idx
        }
        return accu
    }, 0)

export default SumsInArray