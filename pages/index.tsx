import styles from '../styles/Home.module.css'

import Container from "../components/Container";
import { InferGetStaticPropsType } from "next";
import RecentPosts from 'components/RecentPosts';
import { allProjects, allWorks } from 'contentlayer/generated';
import Link from 'next/link';

import MainTitleImage from "components/MainTitleImage";

const Home = ({ workPosts, projectPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
      <div className={styles.indexContainer}>
        <MainTitleImage />
        
        <div className={styles.indexContainerSub}>
          <h1 className={styles.recent_title}>Work Recent</h1>
          
          <RecentPosts posts={workPosts} />

          <Link href='/work'>
            <div className={styles.moreBtnDiv}>
              <button className={styles.moreBtn}>
                M O R E
              </button>
            </div>
          </Link>
          
          <h1 className={styles.recent_title}>Project Recent</h1>
          
          <RecentPosts posts={projectPosts} />

          <Link href='/project'>
            <div className={styles.moreBtnDiv}>
              <button className={styles.moreBtn}>
                M O R E
              </button>
            </div>
          </Link>
        </div>

        {/* footer */}
        <div className={styles.footerContainer}>
          footer


        </div>

      </div>
  );
};

export const getStaticProps = async () => {
  const workPosts = allWorks.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  const projectPosts = allProjects.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      workPosts,
      projectPosts,
    },
  }
}



export default Home;
