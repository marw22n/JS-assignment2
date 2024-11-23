var arrayOfQuotes = [
  {
    author: " Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  { author: "Frank Zappa", quote: "So many books, so little time." },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you dont have to remember anything.",
  },
];

function viewQuote() {
  var random = parseInt(Math.random() * arrayOfQuotes.length);
  document.getElementById(
    "quoteOutput"
  ).innerHTML = `"${arrayOfQuotes[random].quote}"`;
  document.getElementById(
    "authorOutput"
  ).innerHTML = `--${arrayOfQuotes[random].author}`;
}
