import React from 'react';
import Image from "next/image";
import Resource from "../../public/Resource";
import styles from './index.module.css'

const PostInput = () => {
    return (
        <div className={styles.PostInputContainer}>
            <div className={styles.Input}>
                <Image src={Resource.Images.MALEAVATAR}/>
                <textarea rows={1} name={'post'} placeholder={'متن پست...'}/>
                <div className={styles.Icons}>
                    <Image src={Resource.Svg.EMOJI}/>
                    <Image src={Resource.FilledSVG.CAMERAFILLED}/>
                    <Image src={Resource.FilledSVG.VIDEOFILLED}/>
                    <Image src={Resource.Svg.SEND}/>
                </div>
            </div>
        </div>
    );
};

export default PostInput;
