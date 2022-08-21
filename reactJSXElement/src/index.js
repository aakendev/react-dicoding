import React from "react";
import { createRoot } from "react-dom/client";

function Button({ link }) {
  return <a href={link}>Find out more</a>;
}

function CardHeader({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}

function CardBody({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

function News() {
  //data News
  const someNews = [
    {
      title: "CNN Acuire Breme",
      date: "March 20 2022",
      content: "CNN purchase Beyley",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "React News",
      date: "March 19 2022",
      content: "ReactJS is the best Library for Developing Website",
      image: "https://source.unsplash.com/user/ilyapavlov/600x400",
      category: "Programming",
      link: "#",
    },
    {
      title: "Bad Habitat",
      date: "July 10 2022",
      content: "Bad Habitat is when you had toxic neighbours",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "Tips",
      link: "#",
    },
  ];

  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      <Card
        title={someNews[0].title}
        date={someNews[0].date}
        content={someNews[0].content}
        image={someNews[0].image}
        category={someNews[0].category}
        link={someNews[0].link}
      />
      <Card
        title={someNews[1].title}
        date={someNews[1].date}
        content={someNews[1].content}
        image={someNews[1].image}
        category={someNews[1].category}
        link={someNews[1].link}
      />
      <Card
        title={someNews[2].title}
        date={someNews[2].date}
        content={someNews[2].content}
        image={someNews[2].image}
        category={someNews[2].category}
        link={someNews[2].link}
      />
      <Card {...someNews[0]} />
      {someNews.map((news) => (
        <Card {...news} key={news.title} />
      ))}
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<News />);
