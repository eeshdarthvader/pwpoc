
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { getProductSelectorBroker, getBrokerBackground } from '../lib/api'
import CoverImage from '../components/cover-image'



export default function Index({ preview, productSelectorBroker, backgroundImage}) {
  console.log("backgroundImage", backgroundImage)
  const { title, theme, hintText, emailPlaceholderText } = productSelectorBroker
  return (
    <>
      <Layout preview={preview} theme={theme.toLowerCase()}>
        <Head>
          <title>Nextjs Contentful app</title>
        </Head>
        <Container>
          <Intro heading={`Benefit with the Scalable ${title}`} subHeading={"Open an account now: Trade stocks, ETFs, crypto & derivatives unlimited and secure benefits"} />
        </Container>
        
        <Container >
         <div className="grid place-items-center">
          <input type="text" placeholder={emailPlaceholderText} value="" className='min-w-[70%] float-left w-[calc(100%_-_50rem)] font-light text-lg text-[#7a7a8f] border h-full px-2.5 py-2 rounded-none border-solid border-[#28ebcf]'/>
          <Container >
            <div className="hidden tablet:block text-center mt-2 mb-2 text-sm">{hintText}</div>  
          </Container>
          <button type="button" className="mt-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#28ebcf] dark:text-black dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
          
          </div>
        </Container>
        <div className={`mb-8 md:mb-16 ${backgroundImage.classes}`}>
          <CoverImage title={backgroundImage.title} slug={backgroundImage.title} url={backgroundImage.url} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps(ctx) {
  const preview = ctx.draftMode === true
  const data = (await getProductSelectorBroker(preview)) || {}
  const {backgroundImage} = (await getBrokerBackground(preview)) || {}
  


  return {
    props: { 
      preview, 
      backgroundImage,
      productSelectorBroker: data?.productSelectorBroker || {}
    }
  }
}
