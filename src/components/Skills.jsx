import React from "react";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import cpp from "../assets/cpp.png";
import docker from "../assets/docker.png";
import firebase from "../assets/firebase.png";
import flutter from "../assets/flutter.png";
import mongo from "../assets/mongo.png";
import git from "../assets/git.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: flutter,
      title: "Flutter",
      style: "shadow-sky-400",
    },
    {
      id: 2,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 3,
      src: cpp,
      title: "C++",
      style: "shadow-blue-700",
    },
    {
      id: 4,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },

    {
      id: 5,
      src: git,
      title: "Git",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full sm:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
