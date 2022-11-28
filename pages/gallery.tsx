import type { NextPage } from "next";
import Container from "../components/Container"

import { allGalleries } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import GalleryPost from "components/ProjectPost";
import { prefix } from "config/config";

import Image from "next/image";
import styles from '../styles/daily.module.css';

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
                            <h1 className={styles.title}>갤러리</h1>
                            <h3 className={styles.subtitle1}>Gallery</h3>
                            <h3 className={styles.subtitle2}>지나가다 막 찍어서 올리는..</h3>
                    </div>                    
                    
                </div>
                
                {posts.map((post) => (
                    <GalleryPost
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

export default daily;
    
export const getStaticProps = async () => {
    const posts = allGalleries.sort(
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

    

