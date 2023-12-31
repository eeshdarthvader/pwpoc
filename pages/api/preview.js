export default async function preview(req, res) {
  //const { secret, slug } = req.query

  // if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

  // Enable Draft Mode by setting the cookie
  res.setDraftMode({ enable: true })

  const url = `/`
  res.setHeader('Content-Type', 'text/html')
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`
  )
  res.end()
}
