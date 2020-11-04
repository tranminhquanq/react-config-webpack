import * as React from "react";
import quotes from './quotes'

export interface AppProps {
  name: string;
  age: string;
}

export interface Quote {
  quoteText: String,
  quoteAuthor: String
}

function renderQuote(quotes : any) {
  return quotes.map((quote : Quote) => {
    return (
      <div>
        <h1>{quote.quoteAuthor}</h1>
        <p>{quote.quoteText}</p>
      </div>
    )
  })
}

export default function App() {
  return (<div>{renderQuote(quotes)}</div>)
}
