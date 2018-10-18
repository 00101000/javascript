module.exports = (() => {
    const daysOfWeek = new Map([
        [1, 'Monday'],
        [2, 'Tuesday'],
        [3, 'Wednesday'],
        [4, 'Thursday'],
        [5, 'Friday'],
        [6, 'Saturday'],
        [7, 'Sunday']
    ])

    const pad = (number) => {
        return number.toString().padStart(2, 0)
    }

    const addDays = (date, days) => {
        if (date instanceof Date) {
            date.setDate(date.getDate() + days)
            return date
        }
    }

    return {
        daysOfWeek,
        pad,
        addDays
    }
})()