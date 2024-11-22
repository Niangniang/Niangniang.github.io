import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Column - Photo and Social Links */}
        <div className="md:w-1/3 flex flex-col items-center">
          <img
            src="/assets/photo_pp.jpg"
            alt="Thierno Mountagha Niang"
            className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://github.com/Niangniang"
              className="hover:text-blue-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/thierno-mountagha-niang-9635b9176/"
              className="hover:text-blue-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:mountagha.tmn@gmail.com"
              className="hover:text-blue-200 transition"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>

        {/* Right Column - Profile Info */}
        <div className="md:w-2/3 text-left">
          <h1 className="text-5xl font-bold mb-4">Thierno Mountagha Niang</h1>
          <p className="text-2xl mb-6 text-blue-100">
            Développeur Full Stack | Django, Spring | React, Flutter
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Passionné par le développement web et mobile, je combine expertise
            technique et créativité pour concevoir des solutions innovantes.
            Spécialisé dans les technologies Django et Spring côté backend,
            ainsi que React et Flutter pour le frontend, je m'efforce de créer
            des applications performantes et intuitives.
          </p>
          <a
            href="/chemin/vers/votre/cv.pdf"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
