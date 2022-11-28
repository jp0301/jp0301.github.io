import React from "react";

import Head from "next/head";
import Image from "next/image";
import metadata from "../data/metadata";
import Nav from "./Nav";

import styles from '../styles/Container.module.css';
import { useEffect, useState } from "react";

const Container = (props:any) => {

    const meta = {
        title: metadata.title,
        description: metadata.description,
        author: metadata.author,
        ...props.customMeta,
      };

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <div>

            <Head>
                <title>{meta.title}</title>
            </Head> 

            <main>
                {/* primary nav */}
                <div>
                    <header className={scrollPosition < 100 ? styles.header_origin : styles.header_change}>
                        <Nav />
                    </header>
                    {props.children}
                </div>
            </main>

        </div>
    )

}


export default Container;