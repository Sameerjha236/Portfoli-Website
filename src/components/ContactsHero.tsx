import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { JSX } from "react";

const ContactsHero = () => {
  return (
    <section className=" w-full h-full flex flex-col items-center px-6 md:px-12 py-16 animateFadeIn">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-secondary">
          Let&apos;s Connect
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify ">
          Have a question, project proposal, or just want to say hello? I’m a
          Frontend Developer passionate about building seamless, interactive web
          experiences. Feel free to reach out!
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        <ContactLink
          href="mailto:sameerjha236@gmail.com"
          icon={<FaEnvelope size={24} />}
          label="Email Me"
        />
        <ContactLink
          href="https://api.whatsapp.com/send?phone=9210925656"
          icon={<FaWhatsapp size={24} />}
          label="WhatsApp Me"
        />
      </div>

      {/* Social Media */}
      <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
        <ContactLink
          href="https://github.com/Sameerjha236"
          icon={<FaGithub size={24} />}
          label="Follow Me on GitHub"
        />
        <ContactLink
          href="https://twitter.com/"
          icon={<FaTwitter size={24} />}
          label="Follow Me on Twitter"
        />
        <ContactLink
          href="https://www.linkedin.com/in/sameer-jha-23m6y2002/"
          icon={<FaLinkedin size={24} />}
          label="Connect on LinkedIn"
        />
      </div>

      <p className="mt-12 text-lg text-muted-foreground italic">
        Looking forward to collaborating and building something amazing
        together!
      </p>
    </section>
  );
};

const ContactLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: JSX.Element;
  label: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 rounded-lg border border-secondary text-primary hover:bg-secondary hover:text-background transition-all shadow-md"
      aria-label={label}
    >
      {icon}
      <span className="text-lg">{label}</span>
    </a>
  );
};

export default ContactsHero;
