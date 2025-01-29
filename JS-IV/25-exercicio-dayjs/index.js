const dayjs = require('dayjs')

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const currentAge = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(currentAge + 1, 'year')
    const daysUntilNextBirthday = nextBirthday.diff(today, 'day') + 1

    console.log(`
        Beatriz Gonçalves em ${today.format('DD/MMM/YYYY')}

        Idade atual: ${currentAge}
        Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}
        Dias até o próximo aniversário: ${daysUntilNextBirthday}
    `)
}

birthday('2004-07-02')