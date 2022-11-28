import Link from "next/link";
import DateCal from "./DateCal";

import styles from "../styles/DailyPost.module.css";
import Image from "next/image";

export default function ProjectPost({ date, title, des, category, thumbnailUrl, slug }:any) {
    
    const writeDate = DateCal(date); // 현재날짜, 시간 - 작성날짜, 시간시간계산
    
    return (
        <div className={styles.dailyPostContainer}>
            <Link href={`${slug}`} passHref>
                <div className={styles.dailyPostCard}>
                    <div className={styles.dailyPostCardImage}>
                        <Image
                            src={thumbnailUrl}
                            alt="thumbnail"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.dailyPostCardText}>
                        <div className={styles.dailyCategory}>{category}</div>
                        <h3 className={styles.dailyTitle}>{title}</h3>
                        <div className={styles.dailyDes}>{des}</div>
                        <div className={styles.dailyDate}>{writeDate}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
