import Link from "next/link";
import DateCal from "./DateCal";

import styles from "../styles/RecentPost.module.css";
import Image from "next/image";

const RecentPosts = ({ posts }:any) => {
    
    return (
        <div>


            <section>
                <div className={styles.RecentPostContainer}>
                    {posts.slice(0, 3).map((post:any) => (
                        <Link key={post.slug} href={ `/${post.category}/${post.slug}`} passHref>
                            <div className={styles.RecentPostCard}>
                                <div className={styles.RecentPostCardImage}>
                                    <Image
                                        src={post.thumbnailUrl}
                                        alt="thumbnail"
                                        // width={500}
                                        // height={500}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div>
                                    <h2>{post.title}</h2>
                                    <p>{post.description}</p>
                                    <span>{DateCal(post.date)}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
        
    );
};

export default RecentPosts;