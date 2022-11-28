import Image from "next/image";

import styles from "../styles/Home.module.css";

const MainTitleImage = () => {

    return (
        <div className={styles.mtContain}>
            <div className={styles.mainTitleImageContainer}>
            <Image
                src= "/blogMain.png"
                alt="mainImage"
                width={1920}
                height={600}
                layout="responsive"
                objectFit="cover"
            />
            </div>

            <div className={styles.titleContain}>
                <div  className={styles.mainTitle}>
                    돌처럼 우직한 개발자의 클라우드
                </div>
            </div>

        </div>
    )



};

export default MainTitleImage;