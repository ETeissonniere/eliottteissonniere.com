import Image from 'next/image'
import Layout from '../components/Layout'
import { bgWrap } from "../css/index.module.css"

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
      Image Component
      <br />
      as a Background
    </div>
  </Layout>
)

export default IndexPage
