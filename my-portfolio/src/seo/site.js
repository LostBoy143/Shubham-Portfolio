export const siteConfig = {
  name: "Shubham Singh",
  title: "Shubham Singh | AI SaaS Founder & Full-Stack Developer",
  description:
    "Shubham Singh is an AI SaaS Founder and Full-Stack Developer. Creator of BolChat and AI Social Studio, specializing in building agentic AI systems and scalable web products.",
  siteUrl: import.meta.env.VITE_SITE_URL || "",
  image: "/profile.png",
  email: "shubham@bolchat.tech",
  jobTitle: "AI SaaS Founder & Full-Stack Developer",
  about:
    "I am a founder and full-stack engineer who enjoys taking ambitious ideas from zero to one. I work across intuitive user interfaces, advanced backend systems, RAG pipelines, and agent-based AI applications, with a focus on building products that are robust, scalable, and user-centric.",
  sameAs: [
    "https://www.linkedin.com/in/shubham-singh-35153122b/",
    "https://github.com/shubh-ships",
    "https://www.instagram.com/intro_vertedguyy/",
    "https://medium.com/@singhshubham620278",
    "https://peerlist.io/shubham_ships",
    "https://www.crunchbase.com/person/shubham-singh-b315",
    "https://www.producthunt.com/@new_user___1182026307692f98e5bbec1",
    "https://bolchat.tech",
    "https://aisocialstudio.online",
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shubham-singh-35153122b/",
      handle: "Professional profile",
      icon: "/linkedin.png",
    },
    {
      label: "GitHub",
      href: "https://github.com/shubh-ships",
      handle: "Code and open work",
      icon: "/github-logo.png",
    },
    {
      label: "Peerlist",
      href: "https://peerlist.io/shubham_ships",
      handle: "Builder profile",
      initials: "P",
    },
    {
      label: "Medium",
      href: "https://medium.com/@singhshubham620278",
      handle: "Writing and notes",
      initials: "M",
    },
    {
      label: "Crunchbase",
      href: "https://www.crunchbase.com/person/shubham-singh-b315",
      handle: "Founder profile",
      initials: "CB",
    },
    {
      label: "Product Hunt",
      href: "https://www.producthunt.com/@new_user___1182026307692f98e5bbec1",
      handle: "Product launches",
      initials: "PH",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/intro_vertedguyy/",
      handle: "Personal updates",
      icon: "/instagram.png",
    },
  ],
  products: [
    {
      name: "BolChat",
      url: "https://bolchat.tech",
      description:
        "AI SaaS platform for launching intelligent business chat agents, automating support, capturing leads, and handling multilingual customer conversations.",
    },
    {
      name: "AI Social Studio",
      url: "https://aisocialstudio.online",
      description:
        "AI content generation platform for creating social media posts, captions, and blogs for creators and businesses.",
    },
  ],
};

export function getSiteUrl() {
  if (siteConfig.siteUrl) {
    return siteConfig.siteUrl.replace(/\/$/, "");
  }

  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return "";
}

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const siteUrl = getSiteUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
}
