import Image from "next/image"
import Layout from "../components/Layout"
import { Header, Paragraph } from "../components/Text"
import Links from "../components/links"
import { bgWrap, presentationContainer } from "../css/index.module.css"

const IndexPage = () => (
  <Layout title="Eliott Teissonniere">
    <div className={bgWrap}>
      <Image
        src="/images/background.jpg"
        layout="fill"
        className="home-background"
      />
    </div>
    <div>
      <Links links={[
        { name: "Consulting", link: "https://nuclei.studio/" },
        { name: "Governance Research Institute", link: "https://governanceresearch.institute/" },
        { name: "Writing", link: "https://medium.com/@eliott_t" },
        { name: "Open Source", link: "https://github.com/ETeissonniere" },
        { name: "Twitter", link: "https://twitter.com/EliottTeiss" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/eliott-teissonniere/" }
      ]} />
    </div>
    <div className={presentationContainer}>
      <Header content="Eliott Teissonnière" />
      <Paragraph>
        Eliott Teissonniere is a polymath, engineer and entrepreneur. He used to be the
        CTO of BitNation, a governance and crypto company which was rewarded by the
        NetExplo prize from UNESCO in 2017, made the world’s first marriage dApp for Ethereum
        and lead Nodle’s Blockchain and Engineering teams. He was featured in various medias
        for his work on decentralized governance and blockchains such as Decrypt, CoinTelegraph
        and CoinDesk, and spoke at high profile events such as the Paris Blockchain Week, the
        Stanford Blockchain Conference and presented of front of the European commission with
        past European deputies on the subject of Covid-19 tracing via the Blockchain. He is a
        mentor at the Berkeley Blockchain Accelerator and advises various crypto and technology
        startups. He cofounded the Governance Research Institute, to research new governance
        models for companies, communities and governments.
      </Paragraph>
    </div>
  </Layout>
)

export default IndexPage
