// const programming = ["js", 'java', 'py', "swift", 'cpp']

// const values = programming.forEach(item => {
//     // console.log(item);
//     return item
// })

// console.log(values);

// filter 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter(num => num>4)
// console.log(newNums);

// const newNums = myNums.filter(num => {
//     return num>4
// })
// console.log(newNums);

// const newNums = []

// myNums.forEach(num => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


let books = [
    {
        "title": "The Alchemist",
        "genre": "Fiction",
        "publish": 1988,
        "edition": 2006
    },
    {
        "title": "Atomic Habits",
        "genre": "Self-help",
        "publish": 2018,
        "edition": 2021
    },
    {
        "title": "Sapiens",
        "genre": "History",
        "publish": 2011,
        "edition": 2015
    },
    {
        "title": "Clean Code",
        "genre": "Programming",
        "publish": 2008,
        "edition": 2010
    },
    {
        "title": "1984",
        "genre": "Dystopian",
        "publish": 1949,
        "edition": 2013
    },
    {
        "title": "Deep Work",
        "genre": "Productivity",
        "publish": 2016,
        "edition": 2019
    },
    {
        "title": "The Pragmatic Programmer",
        "genre": "Programming",
        "publish": 1999,
        "edition": 2019
    },
    {
        "title": "To Kill a Mockingbird",
        "genre": "Fiction",
        "publish": 1960,
        "edition": 2005
    },
    {
        "title": "Thinking, Fast and Slow",
        "genre": "Psychology",
        "publish": 2011,
        "edition": 2013
    },
    {
        "title": "The Subtle Art of Not Giving a F*ck",
        "genre": "Self-help",
        "publish": 2016,
        "edition": 2020
    }
]

// const userBooks = books.filter(bk => bk.publish>2000)
// const userBooks = books.filter(bk => bk.edition>2000)
// const userBooks = books.filter(bk => {return bk.edition>2000})
const userBooks = books.filter(bk => {
    return bk.edition>2000 && bk.genre === "Fiction"
})

console.log(userBooks);

