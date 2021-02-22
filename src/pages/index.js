import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'portfolio site'} />
        <meta name="keywords" content="Frontend software development portfolio website." />

        {/* Open Graph */}
        <meta property="og:title" content="Daniel Laserna | Software Portfolio Website" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Professional portfolio website for front-end developer Daniel Laserna. Created with GatsbyJS. The site contains information about Daniel Laserna and showcases his professional software projects."
        />
        <meta property="og:image" content="https://i.imgur.com/OtxKtOV.png" />
        <meta property="og:url" content="https://website-portfolio-ashy.vercel.app/" />
        {/* <meta rel="canonical" href="" /> */}
      </Helmet>
      <App />
    </>
  );
};
