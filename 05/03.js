let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u

console.log('2015-01-02'.replace(re,'$<day>/$<month>/$<year>'))

let res = '2015-01-02'.replace(re,(matched,capture1,capture2,capture3,position,s,groups) => {
    console.log(args)
    let  {day,month,year} = args[args.length-1]
    return `${day}/${month}/${year}`
})

console.log(res)
