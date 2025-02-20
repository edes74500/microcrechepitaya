import Image from "next/image";

const teamMembers = [
  {
    name: "Alice Dupont",
    role: "Directrice",
    image: "/equipe/astrid.jpg",
    rotation: "-1.5deg",
  },
  {
    name: "Marc Martin",
    role: "Éducateur",
    image: "/equipe/camille.jpg",
    rotation: "1.3deg",
  },
  {
    name: "Sophie Bernard",
    role: "Assistante",
    image: "/equipe/clemence.jpg",
    rotation: "-1.2deg",
  },
  {
    name: "Lucas Petit",
    role: "Éducateur",
    image: "/equipe/delphine.jpg",
    rotation: "1.7deg",
  },
  {
    name: "Emma Lefevre",
    role: "Psychologue",
    image: "/equipe/lola.jpg",
    rotation: "-1.4deg",
  },
  {
    name: "Julien Moreau",
    role: "Agent de service",
    image: "/equipe/maeva.jpg",
    rotation: "1.2deg",
  },
];

export default function EquipePage() {
  return (
    <>
      <section className="py-16 container mx-auto section-container">
        <div className="pb-12">
          <h1 className="text-5xl font-extrabold text-center mb-12  decoration-2 text-primary">Notre Équipe</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto ">
            Notre équipe est composée de personnes ayant développé une expérience dans l'accueil des jeunes enfants. La
            plupart de nos membres ont une expérience dans l'accueil individuel qui traduit une capacité à accompagner
            votre enfant de manière individualisée, c'est bien là l'essence de notre projet.
          </p>
        </div>
        <div className="flex flex-wrap gap-7 relative justify-center items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="block bg-white border border-gray-300 shadow-lg transition-transform hover:scale-105 py-2 px-1 pb-3 relative first:ml-0 ml-[-16px]"
              style={{ transform: `rotate(${member.rotation})` }}
            >
              {/* Bande de scotch via SVG, sans rotation additionnelle pour suivre la photo */}
              <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 shadow-md">
                <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="20" rx="3" fill="rgba(235,230,230,0.5)" />
                  <path d="M0 10 L80 10" stroke="rgba(255,255,255,0.7)" strokeDasharray="4 2" strokeWidth="1" />
                </svg>
              </div>

              {/* Conteneur image avec padding pour effet Polaroid */}
              <div className="p-2 bg-white">
                <Image src={member.image} alt={member.name} width={150} height={150} className="object-cover" />
              </div>

              {/* Légende */}
              <div className="pt-2 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-16 bg-gradient-to-b from-[#f0e5d8bb] to-[#d9c6b2c0]">
        {/* Cercles décoratifs en arrière-plan */}

        <div className="section-container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="absolute w-48 h-48 bg-primary/40 rounded-full bottom-0 right-16 mix-blend-multiply opacity-50 z-0"></div>
          <div className="absolute w-32 h-32 bg-secondary/40 rounded-full top-8 left-8 mix-blend-multiply opacity-50 z-0"></div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Colonne image */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
              <Image
                src="/section/equipe.jpg"
                alt="Notre Équipe"
                width={300}
                height={300}
                className="object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Colonne texte */}
            <div className="w-full lg:w-2/3 lg:pl-8">
              <h2 className="text-3xl font-bold mb-4 text-primary">Une équipe investie, un projet solide.</h2>
              <p className=" text-gray-700 mb-4">
                Notre équipe est constituée de 4 professionnelles spécialisées de la petite enfance, diplômées d'état,
                pour une complémentarité pertinente au service de l'enfant et sa famille.
              </p>
              <p className=" text-gray-700 mb-4">
                <strong>Réunions d'équipe :</strong> prendre le temps de réfléchir en amont, d'échanger les idées, de
                penser des projets. Analyse de la pratique.
              </p>
              <p className=" text-gray-700">
                <strong>Lectures-débats :</strong> sur des articles et livres pédagogiques : harmoniser nos pratiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-container">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Créer une dynamique dans laquelle chacun se retrouve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            {/* <h3 className="font-semibold text-lg mb-3">01.</h3> */}
            <p className="text-gray-600">Une qualité de vie au travail, pour s'épanouir professionnellement</p>
          </div>

          <div className="bg-green-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            {/* <h3 className="font-semibold text-lg mb-3">02.</h3> */}
            <p className="text-gray-600">Des ateliers et formations pour monter en compétences</p>
          </div>

          <div className="bg-amber-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-amber-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            {/* <h3 className="font-semibold text-lg mb-3">03.</h3> */}
            <p className="text-gray-600">
              Des prises de responsabilités pour être impliqué dans la réussite de la micro-crèche
            </p>
          </div>

          <div className="bg-rose-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-rose-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            {/* <h3 className="font-semibold text-lg mb-3">04.</h3> */}
            <p className="text-gray-600">Des projets à créer !</p>
          </div>
        </div>
      </section>
    </>
  );
}
