import { SearchFuse } from 'components/SearchFuse'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { RiPlantFill } from "react-icons/ri";
import { RecentNotes } from "components/RecentNotes";
import styles from 'styles/Home.module.css'



const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="notes that are watered and groomed over time" content="Generated by William Chorski" />
        <link rel="icon" href="/favicon.ico" />
        <script async defer data-website-id={process.env.UMAMI_WEBSITE_ID} src={process.env.UMAMI_SRC}></script>
      </Head>

      <main className={styles.main}>

        <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>
        <h2 className={styles.title}>
          {process.env.NEXT_PUBLIC_SUBTITLE}
        </h2>

        <section className="pressStart">

          <Link href='/vault'>
            <a><RiPlantFill /></a>
          </Link>
        </section>

        <SearchFuse />

        <hr />

        <RecentNotes />


      </main>
    </div>
  )
}



export default Home
