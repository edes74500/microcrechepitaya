import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaCalendar, FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <section className="py-16 container mx-auto section-container">
        <div className="pb-12">
          <h1 className="text-5xl font-extrabold text-center mb-6 text-primary">Contact</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Nous sommes à votre écoute ! N'hésitez pas à nous contacter pour toute question concernant notre
            micro-crèche.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Notre adresse</h3>
                    <p className="text-muted-foreground">123 Avenue des Enfants</p>
                    <p className="text-muted-foreground">75001 Paris</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaCalendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Horaires d'ouverture</h3>
                    <p className="text-muted-foreground">Du lundi au vendredi</p>
                    <p className="text-muted-foreground">7h30 - 18h30</p>
                    <p className="text-muted-foreground mt-2 text-sm italic">
                      Fermé les jours fériés et 3 semaines en août
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                    <p className="text-muted-foreground">01 23 45 67 89</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaEnvelope className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">contact@microcreche-pitaya.fr</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaFacebook className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Suivez-nous</h3>
                    <a
                      href="https://facebook.com/microcrechepitaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Facebook Micro-crèche Pitaya
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-6">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="w-full">
                    <label className="text-sm text-muted-foreground block mb-1">Nom</label>
                    <Input type="text" placeholder="Votre nom" className="w-full" />
                  </div>
                  <div className="w-full">
                    <label className="text-sm text-muted-foreground block mb-1">Prénom</label>
                    <Input type="text" placeholder="Votre prénom" className="w-full" />
                  </div>
                </div>
                <div className="w-full">
                  <label className="text-sm text-muted-foreground block mb-1">Email</label>
                  <Input type="email" placeholder="votre@email.com" className="w-full" />
                </div>
                <div className="w-full">
                  <label className="text-sm text-muted-foreground block mb-1">Message</label>
                  <Textarea placeholder="Votre message" className="min-h-[150px] w-full" />
                </div>
                <Button type="submit" className="w-full md:w-auto md:min-w-[200px] mx-auto block">
                  Envoyer
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647856687320!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}
