// src/components/Projets.js
function Projets() {
  const projets = [
    {
      titre: "Application E-commerce",
      description: "Plateforme de vente en ligne avec panier et paiement",
      technologies: ["React", "Node.js", "MongoDB"],
      lienGithub: "https://github.com/votre-username/projet-ecommerce",
    },
    {
      titre: "API de Gestion de Tâches",
      description: "Backend RESTful pour application de gestion de tâches",
      technologies: ["Express", "TypeScript", "PostgreSQL"],
      lienGithub: "https://github.com/votre-username/api-gestion-taches",
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mes Projets</h2>
      {projets.map((projet) => (
        <div key={projet.titre} className="mb-4 p-4 border rounded">
          <h3 className="text-xl font-semibold">{projet.titre}</h3>
          <p>{projet.description}</p>
          <div className="flex space-x-2 mt-2">
            {projet.technologies.map((tech) => (
              <span key={tech} className="bg-blue-100 px-2 rounded">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={projet.lienGithub}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir sur GitHub
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projets;
