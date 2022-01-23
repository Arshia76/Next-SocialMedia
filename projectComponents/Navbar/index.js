import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import styles from './index.module.css'
import PropTypes from 'prop-types';
import Resource from "../../public/Resource";
import SVG from "../../components/Svg";
import Input from "../../components/Input";

const Navbar = props => {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.NavbarUl}>
                <div className={styles.NavbarFirstCol}>
                    <li className={[styles.NavbarLi, styles.Logo].join(' ')}>
                        <Link href={Resource.Routes.HOME}>
                            <Image src={Resource.Images.LOGO}/>
                        </Link>
                    </li>
                </div>
                <div className={styles.NavbarSecondCol}>
                    <Input className={'SearchInput'} fieldClassName={'SearchField'} placeholder={'جستجو...'}
                           icon={Resource.Svg.SEARCH2}/>
                </div>
                <div className={styles.NavbarThirdCol}>
                    <li className={styles.NavbarLi}>
                        <Link href={Resource.Routes.HOME}>
                            <SVG src={Resource.FilledSVG.GLOBEFILLED}/>
                        </Link>
                    </li>
                    <li className={styles.NavbarLi}>
                        <Link href={Resource.Routes.HOME}>
                            <SVG src={Resource.FilledSVG.BELLFILLED}/>
                        </Link>
                    </li>
                    <li className={[styles.NavbarLi,styles.Avatar].join(' ')}>
                        <Image
                            src={Resource.Images.FEMALEAVATAR} />
                    </li>
                </div>
            </ul>
        </nav>
    );
};

Navbar.propTypes = {};

export default Navbar;
