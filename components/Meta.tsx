import Head from "next/head";

type metaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
};

const Meta = ({ title, description, keywords, author }: metaProps) => {
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
      <meta name="image" property="og:image" content="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
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
