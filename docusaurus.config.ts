import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "basefold docs",
  tagline: "Documentation for Basefold",
  favicon: "logo/basefold-icon.svg",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  url: "https://docs.basefold.com",
  baseUrl: "/",

  organizationName: "basefold",
  projectName: "docs.basefold.com",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl: "https://github.com/basefold/docs.basefold.com/tree/main/",
          breadcrumbs: false,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    require.resolve("./plugins/markdown-source-plugin"),
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    metadata: [
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:image",
        content: "https://docs.basefold.com/logo/basefold-logo.svg",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://docs.basefold.com/logo/basefold-logo.svg",
      },
      { property: "og:url", content: "https://docs.basefold.com/" },
    ],
    navbar: {
      logo: {
        alt: "basefold logo",
        src: "logo/basefold-logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Quickstart",
        },
        {
          href: "https://github.com/basefold/docs.basefold.com",
          position: "right",
          className: "header-github-link header-icon-link",
          html: '<img src="/img/github.svg" alt="GitHub" style="height: 18px; width: 18px; margin-bottom: -4px; margin-right: 6px;" class="github-icon" />',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Quickstart",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/basefold/docs.basefold.com",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Terms of Service",
              href: "https://basefold.com/terms",
            },
            {
              label: "Privacy Policy",
              href: "https://basefold.com/privacy",
            },
            {
              label: "contact@basefold.com",
              href: "mailto:contact@basefold.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Basefold`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash"],
    },
  } satisfies Preset.ThemeConfig,
}

export default config
