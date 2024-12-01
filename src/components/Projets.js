import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Code,
  Database,
  Layers,
  Monitor,
  Phone,
} from "lucide-react";

function Projets() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedType, setSelectedType] = useState("tous");

  // Configuration des types de projets avec leurs couleurs associées
  const typeConfigs = {
    web: {
      icon: <Monitor className="w-4 h-4" />,
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
      hoverBg: "hover:bg-emerald-50",
    },
    backend: {
      icon: <Database className="w-4 h-4" />,
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      hoverBg: "hover:bg-purple-50",
    },
    mobile: {
      icon: <Phone className="w-4 h-4" />,
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      borderColor: "border-orange-200",
      hoverBg: "hover:bg-orange-50",
    },
  };

  const projets = [
    {
      titre: "Application E-commerce",
      type: "web",
      description: "Plateforme de vente en ligne avec panier et paiement",
      detailDescription:
        "Une application e-commerce complète permettant aux utilisateurs de parcourir des produits, gérer leur panier et effectuer des paiements sécurisés. Le projet met l'accent sur une expérience utilisateur fluide et une interface responsive.",
      technologies: ["React", "Node.js", "MongoDB"],
      lienGithub: "https://github.com/votre-username/projet-ecommerce",
      lienDemo: "https://demo-ecommerce.com",
      stats: {
        commits: 156,
        stars: 24,
        forks: 8,
      },
      features: ["Authentification", "Panier", "Paiement", "Admin Dashboard"],
    },
    {
      titre: "API de Gestion de Tâches",
      type: "backend",
      description: "Backend RESTful pour application de gestion de tâches",
      detailDescription:
        "Une API RESTful robuste conçue pour gérer les opérations CRUD d'une application de gestion de tâches. L'API inclut l'authentification JWT, la validation des données, et une documentation Swagger complète.",
      technologies: ["Express", "TypeScript", "PostgreSQL"],
      lienGithub: "https://github.com/votre-username/api-gestion-taches",
      lienDemo: "https://api-tasks-demo.com",
      stats: {
        commits: 89,
        stars: 12,
        forks: 3,
      },
      features: [
        "JWT Auth",
        "CRUD Operations",
        "Swagger Docs",
        "Data Validation",
      ],
    },
  ];

  // Composant Badge pour le type de projet
  const TypeBadge = ({ type }) => {
    const config = typeConfigs[type];
    return (
      <span
        className={`
        flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
        ${config.bgColor} ${config.textColor} border ${config.borderColor}
        transition-colors duration-200
        flex-shrink-0
      `}
      >
        {config.icon}
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    );
  };

  // Filtrer les projets en fonction du type sélectionné
  const filteredProjets =
    selectedType === "tous"
      ? projets
      : projets.filter((projet) => projet.type === selectedType);

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Mes Projets
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm mb-6">
            Découvrez une sélection de mes projets les plus significatifs,
            démontrant mes compétences en développement full-stack.
          </p>

          {/* Filtres par type */}
          <div className="flex justify-center gap-3 mb-8">
            {["tous", ...Object.keys(typeConfigs)].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-200
                  ${
                    type === "tous"
                      ? selectedType === type
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-600 hover:bg-blue-50"
                      : selectedType === type
                      ? `${typeConfigs[type].bgColor} ${typeConfigs[type].textColor}`
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                {type !== "tous" && typeConfigs[type].icon}
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredProjets.map((projet, index) => (
            <div
              key={projet.titre}
              className={`
                bg-white rounded-lg shadow-md transform transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
                ${hoveredProject === index ? "ring-2 ring-blue-500" : ""}
              `}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex flex-col md:flex-row">
                {/* Partie gauche */}
                <div className="md:w-1/3 p-5 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 truncate">
                      {projet.titre}
                    </h3>
                    <TypeBadge type={projet.type} />
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {projet.description}
                  </p>

                  {/* Technologies avec icônes */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                      >
                        {tech === "React" && <Code className="w-3 h-3 mr-1" />}
                        {tech === "Node.js" && (
                          <Layers className="w-3 h-3 mr-1" />
                        )}
                        {tech.includes("SQL") && (
                          <Database className="w-3 h-3 mr-1" />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats du projet */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-2 bg-gray-50 rounded-lg text-xs">
                    <div className="text-center">
                      <div className="font-bold text-blue-600">
                        {projet.stats.commits}
                      </div>
                      <div className="text-gray-500">Commits</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-600">
                        {projet.stats.stars}
                      </div>
                      <div className="text-gray-500">Stars</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-600">
                        {projet.stats.forks}
                      </div>
                      <div className="text-gray-500">Forks</div>
                    </div>
                  </div>

                  {/* Liens */}
                  <div className="flex space-x-3">
                    <a
                      href={projet.lienGithub}
                      className="flex items-center px-3 py-1.5 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                    <a
                      href={projet.lienDemo}
                      className="flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>

                {/* Partie droite */}
                <div className="md:w-2/3 p-5">
                  <h4 className="text-lg font-bold mb-3">
                    Description détaillée
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {projet.detailDescription}
                  </p>

                  {/* Features */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-sm mb-3">
                      Fonctionnalités principales
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      {projet.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-gray-700 text-sm"
                        >
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4"
                            />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;
