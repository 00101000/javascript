module.exports = (() => {

    const keyedCollections = () => {
        let m = new Map([[1, 'Volvo']])
        m.set(2, 'Toyota')
        m.set(3, 'Honda')
        m.delete(2)
        m.forEach((v,k)=>console.log(`${k}:${v}`))
        console.log()
        let wm = new WeakMap()
        let key1 = { key: 1 }
        let value1 = {
            mark:'Kia',
            model:'Sorento'
        }
        wm.set(key1,value1)
        let key2 = { key: 2 }
        let value2 = {
            mark:'Toyota',
            model:'Avalon'
        }
        wm.set(key2,value2)
        let key3 = { key: 3 }
        let value3 = {
            mark:'Audi',
            model:'A3'
        }
        wm.set(key3,value3)
        let key4 = { key: 4 }
        let value4 = {
            mark:'Ford',
            model:'Edge'
        }
        wm.set(key4,value4)

        let s = new Set()

        s.add('Toyota')
        s.add('Kia')
        s.add('Audi')
        s.add('Ford')
        s.forEach((v1) => {console.log(v1)})

        let ws = new WeakSet()
        ws.add(value1)
        ws.add(value2)
        ws.add(value3)
        ws.add(value4)
    }

    return {
        keyedCollections
    }
})()