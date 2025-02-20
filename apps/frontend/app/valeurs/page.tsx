import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { FaBabyCarriage, FaBookOpen, FaHeart, FaHome, FaLeaf, FaUsers } from "react-icons/fa";

export default function ValeursPage() {
  return (
    <>
      <section className="py-16 container mx-auto section-container">
        <div className="pb-12">
          <h1 className="text-5xl font-extrabold text-center mb-6 text-primary">Nos Valeurs</h1>
          <h2 className="text-2xl text-center mb-4 text-muted-foreground">Être... Une base pour se construire</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Chez Pitaya, nous créons un environnement chaleureux et stimulant où chaque enfant peut s'épanouir à son
            rythme. Notre approche bienveillante et nos valeurs fortes guident chacune de nos actions.
          </p>
        </div>

        <div className="space-y-24">
          {/* Section 2: Une micro-crèche sociale */}
          <section className="bg-gradient-to-b from-[#f0e5d8] to-[#d9c6b2] rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="relative h-[400px] md:h-auto">
                <Image src="/slider/home/3.jpg" alt="Micro-crèche sociale" className="object-cover" fill priority />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-primary">Une micro-crèche sociale et inclusive</h2>
                <p className="text-muted-foreground mb-8">
                  Nous croyons en une société plus juste où chaque enfant mérite un accueil de qualité, quelle que soit
                  sa situation.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <span className="text-primary text-xl">❯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Mixité et inclusion</h3>
                      <p className="text-muted-foreground">
                        Partenariats actifs avec les acteurs locaux du social et du handicap
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <span className="text-primary text-xl">❯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Accompagnement personnalisé</h3>
                      <p className="text-muted-foreground">Soutien adapté aux besoins spécifiques de chaque famille</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <span className="text-primary text-xl">❯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Accessibilité pour tous</h3>
                      <p className="text-muted-foreground">Tarifs adaptés et places réservées à l'accueil social</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Le projet pédagogique */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Le projet pédagogique Pitaya</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Notre projet s'articule autour de trois piliers fondamentaux, conçus pour offrir à votre enfant un cadre
                d'apprentissage optimal et épanouissant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center space-y-4 pb-2">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                    <FaLeaf className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">Le lien à la nature</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center font-light">
                    Reconnectez votre enfant avec la nature à travers des expériences enrichissantes
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Découverte du jardin potager et éveil aux sens</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Activités en plein air et exploration naturelle</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Sensibilisation ludique à l'environnement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center space-y-4 pb-2">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                    <FaHeart className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">L'adulte support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center font-light">
                    Une équipe attentive et bienveillante pour accompagner chaque enfant
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Accompagnement personnalisé et sécurisant</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Observation fine des besoins individuels</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Communication régulière avec les familles</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center space-y-4 pb-2">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                    <FaBookOpen className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">L'enfant acteur</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center font-light">
                    Favoriser l'autonomie et la confiance en soi dès le plus jeune âge
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Liberté de mouvement et d'exploration</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Respect du rythme individuel</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Créativité et expression personnelle</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Section 3: Une communauté d'apprentissage */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Une véritable communauté d'apprentissage</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Rejoignez une communauté vivante où parents, enfants et professionnels grandissent ensemble dans un
                esprit de partage et de convivialité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center space-y-4 pb-2">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                    <FaUsers className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">Espace Parents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center font-light">
                    Un lieu d'échange et de soutien pour tous les parents
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Ateliers thématiques mensuels</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Rencontres entre parents</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Accompagnement personnalisé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center space-y-4 pb-2">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                    <FaHome className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">Ressources Partagées</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center font-light">
                    Des ressources accessibles pour faciliter votre quotidien
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Bibliothèque parentale</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Matériel de puériculture</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Espace d'échanges solidaire</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center space-y-4 pb-2">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                    <FaBabyCarriage className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">Moments Partagés</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center font-light">
                    Des événements conviviaux pour se retrouver et échanger
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Petits-déjeuners familles</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Fêtes saisonnières</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">❯</span>
                      <p className="text-muted-foreground">Animations de quartier</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
