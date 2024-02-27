const book= [
    {titel:'Book one', genre: 'Fiction', publish:1981, edition:2004},
    {titel:'Book tow', genre: 'Non Fiction', publish:1992, edition:2004},
    {titel:'Book three', genre: 'History', publish:1999, edition:2004},
    {titel:'Book four', genre: 'Non Fiction', publish:1989, edition:2004},
    {titel:'Book five', genre: 'Science', publish:2009, edition:2004},
    {titel:'Book six', genre: 'History', publish:1987, edition:1996},
    {titel:'Book seven', genre: 'Science', publish:1986, edition:2016},
    {titel:'Book eight', genre: 'Non Fiction', publish:2011, edition:1989},
      
]

const userBooks = book.filter( (bk)=>{
    return bk.genre==='History'
} )

console.log(userBooks);
