import { useRef, useState } from 'react';

function Article(props) {
  return <section className="flex flex-col items-center">{props.children}</section>;
}

function Article__Header(props) {
  const { imgSrc, imgAlt, title } = props;

  return (
    <div className="flex flex-col items-center">
      <img src={imgSrc} width="980" height="634" alt={imgAlt} className="max-w-[58rem]" />
      <span className="fig-caption -rotate-45 border border-t-[2px] border-[#FF004D] w-1/4 sm:w-1/12 relative mb-11" />
      <h3 className="oswald-600 text-[#FF004D] mx-[27%] sm:mx-[32%] uppercase text-center text-[22px] sm:text-5xl text-pretty leading-6 tracking-tighter">
        {title}
      </h3>
    </div>
  );
}

function Article__Paragraph(props) {
  return (
    <p className="playfair-display-400 text-[1.3rem] leading-8 mb-8 sm:w-[40rem]">
      {props.children}
    </p>
  );
}

function Article__Interview(props) {
  return <div className="flex flex-col playfair-display-400 relative mb-12">{props.children}</div>;
}

function Interview__Image(props) {
  const { imgSrc, imgAlt } = props;

  return (
    <div
      className="h-dvh w-dvw bg-cover bg-center sticky top-0 -z-10'"
      style={{ backgroundImage: `url(${imgSrc})` }}
      aria-label={imgAlt}
    />
  );
}

function Interview__QA(props) {
  const { question, answer, intervieweeId } = props;

  return (
    <div className="flex flex-col justify-end px-5 h-dvh">
      <div className="flex flex-col justify-items-start">
        <div className="flex flex-col sm:flex-row">
          <div className="flex items-center justify-center p-5 aspect-square w-fit h-fit bg-[#FF004D] playfair-display-900 text-white text-2xl">
            P:
          </div>
          <div className="playfair-display-400 text-lg leading-7 mb-5 bg-white p-4">{question}</div>
        </div>
        <div className="flex flex-col sm:flex-row ml-16">
          <div className="flex items-center justify-center p-5 aspect-square w-fit h-fit bg-[#FF004D] playfair-display-900 text-white text-2xl">
            R<sup>{intervieweeId}</sup>:
          </div>
          <div className="playfair-display-400 text-lg leading-7 mb-8 bg-black text-white p-4">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export {
  Article,
  Article__Header,
  Article__Paragraph,
  Article__Interview,
  Interview__Image,
  Interview__QA,
};
