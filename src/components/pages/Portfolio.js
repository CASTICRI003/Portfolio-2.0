import React from 'react';
import Project from '../elements/Project';

const projects = [
  {
    id: 1,
    image: "images/Twitch_Tracker.png",
    name: "Twitch Discount Tracker",
    alt: "",
    description: "",
    link: "https://github.com/ThinkK1ng/Gaming-APP-Project",
  },
  {
    id: 2,
    image: "images/Rolling_Scones.png",
    name: "The Rolling Scones",
    alt: "",
    description: "",
    link: "https://github.com/sergluna/Project-2",
  },
  {
    id: 3,
    image: "",
    name: "Team-Profile",
    alt: "",
    description: "",
    link: "https://github.com/CASTICRI003/Team-Profile",
  },
  {
    id: 4,
    image: "",
    name: "Password Generator",
    alt: "",
    description: "",
    link: "https://github.com/CASTICRI003/Password-Generator",
  },
  {
    id: 5,
    image: "",
    name: "API Backend Commerce",
    alt: "",
    description: "",
    link: "https://github.com/CASTICRI003/BackEnd-Commerce",
  },
  {
    id: 6,
    image: "",
    name: "PWA Text Editor",
    alt: "",
    description: "",
    link: "https://github.com/CASTICRI003/PWA-Text-Editor",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className='col'>
      <h1>Portfolio</h1>
      <Project projects={projects} />
    </div>
  );
}