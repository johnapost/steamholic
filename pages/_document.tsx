import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Nav from "../components/Nav";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className="min-h-screen bg-dark text-light">
          <Nav />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
