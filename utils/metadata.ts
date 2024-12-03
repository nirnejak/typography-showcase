import config from "@/config"

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

    { name: "og:title", content: metaTitle },
    { name: "og:description", content: metaDescription },
    { name: "og:image", content: metaImage },
    { name: "og:url", content: `${config.baseUrl}${path}` },

    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: metaDescription },
    { name: "twitter:image", content: metaImage },
  ]
}
