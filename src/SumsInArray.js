

const SumsInArray = (arr, arg) => arr
    .reduce((accu, num, idx) => {
        if (num < arg && !accu.find(o => num === o.num)) {
            accu.push({
                idx,
                num
            })
        }
        return accu
    }, [])
    .sort((a, b) => a.num - b.num)
    .reduce((accu, item1, idx, _arr) => {
        const item2 = _arr
            .slice(idx+1)
            .find (_item => _item.num + item1.num === arg)
        if (item2) {
            console.log(item1, item2)
            accu += item1.idx + item2.idx
        }
        return accu
    }, 0)

export default SumsInArray