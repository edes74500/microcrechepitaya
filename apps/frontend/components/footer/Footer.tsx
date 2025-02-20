import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-6 border-t-1 border-gray-300">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Contactez-nous</h3>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" />
              <span>Adresse : 123 Rue de la Crèche, Besançon</span>
            </p>
            <p className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <span>Téléphone : </span>
              <a href="tel:+123456789" className="text-accent ml-1">
                +33 1 23 45 67 89
              </a>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>Email : </span>
              <a href="mailto:contact@pitaya.fr" className="text-accent ml-1">
                contact@pitaya.fr
              </a>
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Liens utiles</h3>
            <ul className="list-none">
              <li className="mb-1">
                <Link href="/about" className="hover:text-accent">
                  À propos
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/services" className="hover:text-accent">
                  Nos services
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-accent">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Suivez-nous</h3>
            <div className="flex space-x-4 mt-2">
              <Link href="https://facebook.com" target="_blank" className="text-accent">
                <FaFacebook />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-accent">
                <FaInstagram />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-accent">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">© {new Date().getFullYear()} Pitaya Micro-Crèche. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
