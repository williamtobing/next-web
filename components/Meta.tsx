import Head from "next/head";
import { useEffect } from "react";

type metaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
};

const Meta = ({ title, description, keywords, author }: metaProps) => {
  useEffect(() => {
    document.documentElement.lang = navigator.language;
  }, []);

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" property="og:title" content={title} />
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta
        name="image"
        property="og:image"
        content="https://res.cloudinary.com/dox0nkwax/image/upload/v1635608705/logo/william12kx_zc1a8m.png"
      />
      <link
        rel="icon"
        href="https://res.cloudinary.com/dox0nkwax/image/upload/v1635603694/logo/gray/Logo_mine_002_woeqa7.svg"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "William S L",
  description:
    "Hi! This is William's website. William is a technology enthusiast who always wants to know many things about technological developments. Visit if you want to know more.",
  keywords:
    "Portfolio, William, Suarez, Tech, Programming, Javascript, React, Vue, Laravel, Developer, Fullstack, Software",
  author: "William Suarez Lumbantobing",
};

export default Meta;
