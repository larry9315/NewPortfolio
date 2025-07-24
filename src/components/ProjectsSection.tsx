"use client";

import React from "react";

const projects = [
  {
    title: "Playlist Automator",
    description:
      "A web application that automates porting Spotify playlists to YouTube Music playlists. It uses Spotify and YouTube APIs to authenticate users and transfer songs.",
    tech: ["C++", "Drogon", "JavaScript", "React", "Docker"],
    links: {
      link: "#",
      demo: "#",
      source: "#",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section className="h-screen overflow-hidden px-4 md:px-24 bg-white text-black flex flex-col">
      {/* Header */}
      <div className="pt-30">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
      </div>

      {/* Card area fills remaining space and centers vertically */}
      <div className="mb-30 flex-1 flex items-center justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl p-6 md:p-8 bg-white border border-gray-300 transition-all duration-300"
            style={{
              boxShadow:
                "0 0px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-800 mb-4 text-lg">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 border-2 border-green-600 text-green-800 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.links.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Link
              </a>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Live Demo
              </a>
              <a
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
