import config from "../config"

interface MetadataArgs {
  path: string
  title: string
  description: string
  image?: string
}

export const generateMetadata = ({
  path,
  title,
  description,
  image,
}: MetadataArgs): any => {
  const metaTitle = title
  const metaDescription = description
  const metaImage = image ?? `${config.baseUrl}/cover.png`

  return [
    { title: metaTitle },
    { name: "description", content: metaDescription },

    { name: "application-name", content: config.appName },
    { name: "author", content: config.authorName },
    { name: "creator", content: config.creator },
    { name: "keywords", content: config.keywords.join(",") },
    { name: "theme-color", content: "#000000" },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "format-detection",
      content: "telephone=no, date=no, address=no, email=no, url=no",
    },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-title", content: config.appName },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },

    { name: "og:title", content: metaTitle },
    { name: "og:description", content: metaDescription },
    { name: "og:image", content: metaImage },
    { name: "og:url", content: `${config.baseUrl}${path}` },

    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: metaDescription },
    { name: "twitter:image", content: metaImage },
  ]
}
