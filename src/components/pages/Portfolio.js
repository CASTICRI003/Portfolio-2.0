import React from 'react';
import Project from '../elements/Project';

const projects = [
  {
    id: 1,
    image: "",
    name: "Gaming APP",
    alt: "",
    description: "",
    link: "",
  },
  {
    id: 2,
    image: "",
    name: "The Rolling Scones",
    alt: "",
    description: "",
    link: "",
  },
  {
    id: 3,
    image: "",
    name: "Cyber-Retail API",
    alt: "",
    description: "",
    link: "",
  },
  {
    id: 4,
    image: "",
    name: "NoSQL",
    alt: "",
    description: "",
    link: "",
  },
  {
    id: 5,
    image: "",
    name: "NoSQL",
    alt: "",
    description: "",
    link: "",
  },
  {
    id: 6,
    image: "",
    name: "NoSQL",
    alt: "",
    description: "",
    link: "",
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