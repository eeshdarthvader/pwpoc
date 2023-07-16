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



export async function getProductSelectorBroker(preview) {
  const entry = await fetchGraphQL(
    `query {
      productSelectorBroker(id: "2Uz6wWQzeEGC7dfOrSKofr", preview: ${
      preview ? 'true' : 'false'
    }) {
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
