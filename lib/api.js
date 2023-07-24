async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

export async function getBrokerBackground(preview) {
  const entry = await fetchGraphQL(
    `query {
      background(id: "6Bgi5gNNA85PbdVP13gdFU", preview: ${
      preview ? 'true' : 'false'
    }) {
        __typename
        sys{
          id
        }
        url{
          sys {
            id
          }
        }
        title
        tailwindClasses
      }
    }`,
    preview
  )

  const {url, title, tailwindClasses} = entry?.data?.background

  
  const {url: backgroundImageUrl} = await getUrl(preview, url?.sys.id)

  return {
    backgroundImage: {
      url: backgroundImageUrl.url,
      title,
      classes: tailwindClasses?.toString() || ""
    },
  }
}

export async function getUrl(preview, id) {
  const entry = await fetchGraphQL(
    `query {
      url(id: "${id}", preview: ${
      preview ? 'true' : 'false'
    }) {
        __typename
        sys{
          id
        }
        url(locale: "en-US")
      }
    }`,
    preview
  )

  const data = entry?.data?.url
  return {
    url: data,
  }
}



export async function getProductSelectorBroker(preview) {
  const entry = await fetchGraphQL(
    `query {
      productSelectorBroker(id: "2Uz6wWQzeEGC7dfOrSKofr", preview: ${
      preview ? 'true' : 'false'
    }) {
        __typename
        sys {
          id
        }
        title
        hintText
        theme
        submitButtonText
        invalidEmailText
        unknownErrorText
        emailPlaceholderText
      }
    }`,
    preview
  )

  const data = entry?.data?.productSelectorBroker
  return {
    productSelectorBroker: data,
  }
}
