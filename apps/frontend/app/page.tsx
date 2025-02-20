import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaBabyCarriage, FaBookOpen, FaHeart, FaHome, FaLeaf, FaUsers } from "react-icons/fa";
import CarrousselHomePage from "./components/CarrousselHomePage";

export default function Home() {
  return (
    <>
      <CarrousselHomePage />

      <section className="py-16 section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bienvenue à la Micro-Crèche Pitaya</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un lieu d'accueil chaleureux et bienveillant pour les tout-petits, où chaque enfant peut s'épanouir dans un
            environnement adapté à ses besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <FaBabyCarriage className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Accueil Personnalisé</h3>
            <p className="text-sm text-muted-foreground">Adaptation aux besoins spécifiques de chaque enfant</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <FaHeart className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Équipe Bienveillante</h3>
            <p className="text-sm text-muted-foreground">Personnel qualifié et attentionné</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <FaLeaf className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Activités Éducatives</h3>
            <p className="text-sm text-muted-foreground">Développement et éveil des sens</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <FaUsers className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Petits Groupes</h3>
            <p className="text-sm text-muted-foreground">Attention individualisée garantie</p>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-200 to-gray-400 grid md:grid-cols-2 grid-cols-1">
        <div className="flex items-center justify-center">
          <Image src="/slider/home/2.jpg" alt="Image de crèche" className=" w-full h-auto" width={500} height={300} />
        </div>
        <div className="section-container max-w-xl rounded-lg p-8 text-center flex flex-col justify-center py-20">
          <div className="max-w-xl justify-center items-center flex flex-col">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Vous recherchez une place en crèche ?</h2>
            <p className="mb-6 text-gray-700">
              Contactez-nous pour pré-inscrire votre enfant et lui offrir un environnement chaleureux.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform">
                  Nous contacter
                </Button>
              </Link>
              <Link href="/pre-inscription">
                <Button size="lg" className="hover:scale-105 transition-transform">
                  Pré-inscription
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-container text-center">
        <h2 className="text-3xl font-bold mb-4">Decouvrez notre structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow flex flex-col items-center">
            <FaUsers className="w-16 h-16 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Notre Équipe</h3>
            <p className="text-muted-foreground mb-6">
              Découvrez les professionnels passionnés qui prennent soin de vos enfants au quotidien.
            </p>
            <Link href="/equipe">
              <Button variant="secondary">Découvrir l'équipe</Button>
            </Link>
          </div>

          <div className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow flex flex-col items-center">
            <FaHome className="w-16 h-16 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Nos Locaux</h3>
            <p className="text-muted-foreground mb-6">
              Visitez virtuellement notre crèche et ses espaces adaptés aux tout-petits.
            </p>
            <Link href="/creche">
              <Button variant="secondary">Découvrir la crèche</Button>
            </Link>
          </div>

          <div className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow flex flex-col items-center">
            <FaBookOpen className="w-16 h-16 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Notre Projet</h3>
            <p className="text-muted-foreground mb-6">
              Apprenez-en plus sur notre vision pédagogique et nos valeurs éducatives.
            </p>
            <Link href="/projet">
              <Button variant="secondary">Découvrir le projet</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
