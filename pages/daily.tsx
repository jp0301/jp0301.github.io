import type { NextPage } from "next";
import Container from "../components/Container"
import DailyPost from "../components/DailyPost"

import { allDailies } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";

import Image from "next/image";

import styles from '../styles/daily.module.css';
import { prefix } from "config/config";

const daily  = ({ posts, recent }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
            <div>
                <div className={styles.upContainer}>
                    <div className={styles.backgroundImage}>
                    {recent.map((post) => (
                        // eslint-disable-next-line react/jsx-key
                        <Image
                            src={post.thumbnailUrl}
                            alt="thumbnail"
                            layout="fill"
                            objectFit="cover"
                        />
                    ))};
                    </div>

                    <div className={styles.title_container}>
                            <h1 className={styles.title}>일상</h1>
                            <h3 className={styles.subtitle1}>Daily</h3>
                            <h3 className={styles.subtitle2}>편하게 아무거나 끄적끄적...</h3>
                    </div>                    
                    
                </div>



                <div className={styles.post_container}>
                    {posts.map((post) => (
                        <DailyPost
                            date={post.date}
                            title={post.title}
                            des={post.description}
                            slug={post._raw.flattenedPath}
                            thumbnailUrl={post.thumbnailUrl}
                            category={post.category}
                            
                            key={post._id}
                        />
                    ))}
                </div>
            </div>
    );
};


export default daily;
    
export const getStaticProps = async () => {
    const posts = allDailies.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

    const arr = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

    const recent = arr.slice(0).reverse();

    return {
        props: {
            posts,
            recent,
        },
    };
};

    

