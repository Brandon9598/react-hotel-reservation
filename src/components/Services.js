import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Do deserunt sunt et laborum qui minim cupidatat anim velit est culpa aliqua culpa.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Exercitation irure laboris amet deserunt et elit eiusmod quis.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Ad laborum incididunt aute minim occaecat amet sint nulla.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Exercitation fugiat nisi laboris nostrud.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
