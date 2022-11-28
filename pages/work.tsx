import Image from "next/image";

import WorkPost from "components/DailyPost"
import { InferGetStaticPropsType } from "next";

import { prefix } from "config/config";

import styles from 'styles/daily.module.css';

import { allWorks } from "contentlayer/generated";

const work  = ({ posts, recent }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
            <div>
                <div className={styles.upContainer}>
                    <div className={styles.backgroundImage}>
                    {recent.map((post) => (
                        // eslint-disable-next-line react/jsx-key
                        <Image
                            src= {post.thumbnailUrl}
                            alt="thumbnail"
                            layout="fill"
                            objectFit="cover"
                        />
                    ))};
                    </div>

                    <div className={styles.title_container}>
                            <h1 className={styles.title}>작업</h1>
                            <h3 className={styles.subtitle1}>Work</h3>
                            <h3 className={styles.subtitle2}>작업물 진행도 또는 기술 공부</h3>
                    </div>                    
                    
                </div>

                {posts.map((post) => (
                    <WorkPost
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
    );
};

export default work;
    
export const getStaticProps = async () => {
    const posts = allWorks.sort(
        (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    );
    const arr = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

    const recent = arr.slice(0).reverse();

    return {
        props: {
            posts,
            recent
        },
    };
};

    

