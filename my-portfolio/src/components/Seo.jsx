import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import projects from "../data/projects";
import { absoluteUrl, getSiteUrl, siteConfig } from "../seo/site";

const defaultKeywords = [
  "Shubham Singh",
  "Shubham Singh founder",
  "BolChat founder",
  "Bolchat founder",
  "AI Social Studio founder",
  "full stack developer",
  "AI engineer",
  "AI powered web products",
  "RAG applications",
  "agent based systems",
  "AI SaaS founder",
  "React developer",
  "Next.js developer",
  "SEO specialist",
];

function setMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;

  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
}

function getProjectUrl(project) {
  if (!project?.link) return undefined;
  return project.link.startsWith("http") ? project.link : `https://${project.link}`;
}

function buildPersonSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#shubham-singh`,
    name: siteConfig.name,
    url: siteUrl,
    image: absoluteUrl(siteConfig.image),
    email: siteConfig.email,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.about,
    sameAs: siteConfig.sameAs,
    founder: siteConfig.products.map((product) => ({
      "@type": "Organization",
      name: product.name,
      url: product.url,
      description: product.description,
    })),
    knowsAbout: [
      "AI SaaS",
      "Search Engine Optimization",
      "Full-stack web development",
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Generative AI",
      "RAG applications",
      "Agent-based AI systems",
    ],
  };
}

function buildWebsiteSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.title,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#shubham-singh`,
    },
    inLanguage: "en",
  };
}

function routeSeo(pathname) {
  if (pathname === "/projects") {
    return {
      title: "Projects by Shubham Singh | BolChat, AI Social Studio and AI SaaS Work",
      description:
        "Explore projects by Shubham Singh, including BolChat, AI Social Studio, AI SaaS platforms, full-stack products, and SEO-focused web applications.",
      path: "/projects",
      keywords: [...defaultKeywords, "Shubham Singh projects", "AI SaaS portfolio"],
    };
  }

  if (pathname.startsWith("/project/")) {
    const projectId = Number(pathname.split("/").filter(Boolean)[1]);
    const project = projects.find((item) => item.id === projectId);
    if (project) {
      return {
        title: `${project.name} by Shubham Singh | ${project.category}`,
        description: `${project.name} is a ${project.category} built by Shubham Singh. ${project.description.slice(0, 190)}`,
        path: `/project/${project.id}`,
        image: `/${project.image}`,
        keywords: [
          ...defaultKeywords,
          `${project.name} founder`,
          `${project.name} Shubham Singh`,
          project.category,
          ...project.tech,
        ],
        project,
      };
    }
  }

  return {
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
    keywords: defaultKeywords,
  };
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const seo = routeSeo(location.pathname);
    const canonical = absoluteUrl(seo.path);
    const image = absoluteUrl(seo.image || siteConfig.image);

    document.title = seo.title;
    document.documentElement.lang = "en";

    setMeta("name", "description", seo.description);
    setMeta("name", "keywords", seo.keywords.join(", "));
    setMeta("name", "author", siteConfig.name);
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("property", "og:type", seo.project ? "article" : "website");
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", siteConfig.name);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", image);
    setLink("canonical", canonical);
    setJsonLd("person-jsonld", buildPersonSchema());
    setJsonLd("website-jsonld", buildWebsiteSchema());

    if (seo.project) {
      setJsonLd("project-jsonld", {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: seo.project.name,
        url: getProjectUrl(seo.project),
        image,
        description: seo.project.description,
        applicationCategory: seo.project.category,
        creator: {
          "@id": `${getSiteUrl()}/#shubham-singh`,
        },
      });
    } else {
      removeJsonLd("project-jsonld");
    }
  }, [location.pathname]);

  return null;
}
