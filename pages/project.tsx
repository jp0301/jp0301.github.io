import type { NextPage } from "next";
import Container from "../components/Container"
import ProjectPost from "../components/ProjectPost"

import { allProjects } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";

import styles from "../styles/daily.module.css";
import Image from "next/image";
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
                            <h1 className={styles.title}>프로젝트</h1>
                            <h3 className={styles.subtitle1}>Project</h3>
                            <h3 className={styles.subtitle2}>그동안 무엇을 만들었나...</h3>
                    </div>                    
                    
                </div>

            

                <div className={styles.post_container}>
                {posts.map((post) => (
                    <ProjectPost
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
    const posts = allProjects.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
    const arr = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

    const recent = arr.slice(0).reverse();
    return {
        props: {
            posts,
            recent,
        },
    };
};

    

