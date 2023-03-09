import Head from 'next/head'
import React from 'react'

interface HeaderInterface {
  title: string
  description: string
}

export const Header = ({ description, title }: HeaderInterface) => {
  return (
    <Head>
      <title>{title}</title>

      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:type" content="website" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
  )
}
