import React, {useState} from "react";
import Link from "next/link";
import navLinks from "../data/navLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from '../styles/Nav.module.css';



const Nav = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    return (

        <nav>
            <div className="mx-auto px-4">
                <div className="flex flex-row justify-between items-center">
                    
                    {/* Hamburger menuButton */}
                    <div className="flex space-x-4">
                        <button onClick={() => setMenuToggle(!menuToggle)}>
                        {menuToggle ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon  className="w-6 h-6" />
                        )}
                        </button>

                        {/* logo */}
                        <div className="hidden md:flex">
                            Onedoli
                        </div>

                        {/* mobile active logo */}
                        <div className="md:hidden flex">
                            Onedoli
                        </div>
                    </div>

                    {/* primary nav */}
                    <div className="hidden md:flex">
                        {navLinks.map((nav) => (
                            <Link href={nav.link} key={nav.title}>
                                <a className={styles.a_tag}>{nav.title}</a>
                            </Link>
                        ))}
                    </div> 

                    {/* secondary nav */}
                    <div className="flex space-x-4">
                        <div>검색</div>
                        <div>다크모드버튼</div>
                    </div>
                </div>




                <div className={`${!menuToggle ? "hidden" : ""} bg-primary-dark-color`}>
                        {navLinks.map((nav) => (
                                <Link href={nav.link} key={nav.title}>
                                    <a className={styles.a_tag}>{nav.title}</a>
                                </Link>
                        ))}
                </div>



            </div>

        </nav>


    )
}

export default Nav;