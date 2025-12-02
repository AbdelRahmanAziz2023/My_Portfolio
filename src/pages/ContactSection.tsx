import React, { useState } from "react";
import { SectionTitle, Button, Card } from "../components";
import { socialLinks, about } from "../data/portfolio";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Form submitted:", formData);
  };

  const renderIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes("github")) {
      return (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.39.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.06 11.06 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.25 5.7.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z" />
        </svg>
      );
    }
    if (p.includes("linkedin")) {
      return (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.69zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 01-.01 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
        </svg>
      );
    }
    if (p.includes("twitter")) {
      return (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M23 4.56c-.8.36-1.66.6-2.56.71a4.48 4.48 0 001.96-2.48c-.88.52-1.86.9-2.9 1.1A4.48 4.48 0 0016.5 3c-2.5 0-4.5 2.02-4.5 4.5 0 .35.04.7.11 1.03C8.1 8.4 4.3 6.4 1.67 3.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.64-.72-.02-1.4-.22-1.99-.55v.06c0 2.17 1.54 3.98 3.58 4.39-.38.1-.78.15-1.19.15-.29 0-.57-.03-.85-.08.57 1.78 2.2 3.08 4.13 3.12A9.02 9.02 0 010 19.54a12.75 12.75 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.84 0-.2 0-.39-.02-.58.88-.64 1.64-1.44 2.24-2.36z" />
        </svg>
      );
    }
    if (p.includes("email") || p.includes("mail")) {
      return (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    }

    // fallback icon
    return (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  };

  return (
    <section id="contact" className="section-padding bg-dark-bg">
      <div className="container-custom">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's discuss your next project or opportunity"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold text-dark-text mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-dark-text-muted text-sm mb-1">Email</p>
                  <a
                    href={`mailto:${about.email}`}
                    className="text-accent-primary hover:text-accent-secondary font-medium"
                  >
                    {about.email}
                  </a>
                </div>
                <div>
                  <p className="text-dark-text-muted text-sm mb-2">
                    Connect With Me
                  </p>
                  <div className="flex gap-3 items-center">
                    {socialLinks.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target={
                          link.url.startsWith("mailto:") ? undefined : "_blank"
                        }
                        rel={
                          link.url.startsWith("mailto:")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="w-10 h-10 rounded-full border border-dark-border hover:border-accent-primary text-dark-text-muted hover:text-accent-primary flex items-center justify-center transition-all"
                        title={link.platform}
                      >
                        {renderIcon(link.platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-dark-text mb-3">
                Availability
              </h3>
              <p className="text-dark-text-muted">
                I'm currently available for freelance projects and contract
                work. Feel free to reach out!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <h3 className="text-xl font-bold text-dark-text mb-6">
              Send me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-dark-text text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-dark-text placeholder-dark-text-muted focus:border-accent-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-dark-text text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-dark-text placeholder-dark-text-muted focus:border-accent-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-dark-text text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-dark-text placeholder-dark-text-muted focus:border-accent-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <Button variant="primary" className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
