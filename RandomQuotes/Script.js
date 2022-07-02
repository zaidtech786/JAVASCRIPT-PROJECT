let quotes = document.querySelector("#quotes");
let author = document.querySelector("#author");
let btn = document.querySelector(".btn");

let data = "";
let headers = {
  header: {
    Accept: "application/json",
  },
};

const randomQuotesGenerate = () => {
      let random = Math.floor(Math.random() * 1643);
      quotes.innerText =`${data[random].text}`;
      author.innerText = `-${data[random].author}`;
    };

  const getRandomQuotes = async () => {
    let res = await fetch( 'https://type.fit/api/quotes');
     data = await res.json();
    randomQuotesGenerate();
  };
  getRandomQuotes();
  console.log(getRandomQuotes())
 
 
btn.addEventListener("click", getRandomQuotes);