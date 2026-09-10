import { useState, type SVGProps } from "react";
import { Mail } from "lucide-react";
import TextInput from "../components/Inputs/TextInput";
import TextArea from "../components/Inputs/TextArea";
import Button from "../components/Inputs/Button";

const GithubIcon = ({ className = "w-4 h-4", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/99edb86320256d395a36e0be4aef6aac`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      if (response.ok) {
        setIsSuccess(true);
        setIsLoading(false);
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
        form.reset();
      } else {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 5000);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      console.error("Error submitting form:", error);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
      setIsLoading(false);
    }
  };

  const socials = [
    {
      label: "Email",
      value: "me@pedroafmonteiro.com",
      href: "mailto:me@pedroafmonteiro.com",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/pedroafmonteiro",
      href: "https://github.com/pedroafmonteiro",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/pedro10monteiro",
      href: "https://www.linkedin.com/in/pedro10monteiro/",
      icon: LinkedinIcon,
    },
  ];

  return (
    <div className="space-y-8 w-full max-w-xl mx-auto py-2">
        <header className="space-y-1">
          <h1 className="text-xl font-medium text-neutral-100">Contact</h1>
          <p className="text-sm text-neutral-400">
            If you have any questions, want to collaborate, or just say hi,
            feel free to reach out!
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="hidden" name="_captcha" value="false" />
          <TextInput
            type="text"
            label="Name"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
          <TextInput
            type="email"
            label="Email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
          />
          <TextInput
            type="text"
            label="Subject"
            id="subject"
            name="subject"
            placeholder="What's this about?"
            required
          />
          <TextArea
            label="Message"
            id="message"
            name="message"
            placeholder="Write your message here..."
            required
          />
          <div className="pt-1">
            <Button
              type="submit"
              baseText="Send message"
              loadingText="Sending..."
              successText="Message sent"
              errorText="Couldn't send — try again"
              isLoading={isLoading}
              isSuccess={isSuccess}
              isError={isError}
            />
          </div>
        </form>

        <section className="pt-6 border-t border-white/5 space-y-4">
          <h2 className="text-sm font-medium text-neutral-300">
            Direct & Socials
          </h2>

          <div className="divide-y divide-white/5">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between py-3 first:pt-0 transition-colors"
                  aria-label={`${social.label}: ${social.value}`}
                >
                  <div className="flex items-center text-neutral-400 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                    <span className="sr-only">{social.label}</span>
                  </div>
                  <span className="font-mono text-sm text-neutral-200 group-hover:text-white transition-colors">
                    {social.value}
                    <span className="inline-block ml-1.5 text-neutral-400 group-hover:text-white transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 select-none">
                      ↗
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </div>
  );
};

export default Contact;
