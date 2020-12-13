import Image from "next/image"
import Link from "next/link"
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
        Eliott Teissonniere is a polymath, engineer and entrepreneur. He used to be the CTO of <Link href="https://bitnation.co"><a>BitNation</a></Link>, a governance and crypto company which was rewarded by the <Link href="https://en.unesco.org/news/netexplo-forum-celebrated-its-10th-edition"><a>NetExplo prize from UNESCO in 2017</a></Link>, made the world’s first marriage dApp on Ethereum and lead <Link href="https://nodle.io"><a>Nodle's</a></Link> Blockchain and Engineering teams for which he co-invented various <Link href="https://patents.google.com/?inventor=Eliott+Teissonniere"><a>pending and granted patents</a></Link>. He was featured in various medias for his work on decentralized governance and blockchains such as <Link href="https://decrypt.co/16404/what-will-blockchain-look-like-in-2030-the-experts-speak"><a>Decrypt</a></Link>, <Link href="https://cointelegraph.com/news/nodle-outgrows-stellar-begins-to-migrate-to-own-blockchain"><a>CoinTelegraph</a></Link> and <Link href="https://www.coindesk.com/iot-app-nodle-moves-from-stellar-blockchain-to-polkadot"><a>CoinDesk</a></Link>; and spoke at various high profile events such as the <Link href="https://hopin.com/events/paris-blockchain-week-summit"><a>Paris Blockchain Week</a></Link>, the Stanford Blockchain Conference and <Link href="https://www.blockchain4europe.eu/event/covid-19-tracing-via-blockchain-striking-a-balance-between-privacy-and-public-health/"><a>presented in front of the European commission with past European deputies on the subject of Covid-19 tracing via the Blockchain</a></Link>. He is a <Link href="https://www.xcelerator.berkeley.edu/x-network"><a>mentor at the Berkeley Blockchain Accelerator</a></Link> and advises various crypto and technology startups. He cofounded in 2020 the <Link href="https://governanceresearch.institute"><a>Governance Research Institute</a></Link> to research new governance models for companies, communities and governments.
      </Paragraph>
    </div>
  </Layout>
)

export default IndexPage
