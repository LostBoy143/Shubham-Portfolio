export const siteConfig = {
  name: "Shubham Singh",
  title: "Shubham Singh | Full-Stack Developer and AI Engineer",
  description:
    "Shubham Singh is a full-stack developer and AI engineer who builds AI-powered web products from scratch, including AI Social Studio and BolChat.",
  siteUrl: import.meta.env.VITE_SITE_URL || "",
  image: "/profile.png",
  email: "shubham@bolchat.tech",
  jobTitle: "Full-Stack Developer and AI Engineer",
  about:
    "I enjoy building products from scratch and bringing ideas to life. I work across interfaces, backend systems, deployment, RAG, and agent-based AI applications, with a focus on products that are simple, useful, and reliable.",
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
