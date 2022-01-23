import React from 'react';
import styles from './index.module.css'
import Image from 'next/image'
import Resource from "../../public/Resource";
import PropTypes from 'prop-types';


const Story = (props) => {
    return (
        <div className={styles.StoryContainer}>
            <div className={styles.StoryHeader}>
                <h2>داستان ها</h2>
                <Image src={Resource.Svg.DOT}/>
            </div>
            <div className={styles.Story}>
                <div className={styles.StoryAdd}>
                    <Image src={Resource.Svg.PLUS}/>
                </div>
                <div className={styles.SingleStory}>
                    <Image src={Resource.Images.FEMALEAVATAR}/>
                </div>

            </div>
        </div>
    )
}

const Event = (props) => {
    return (
        <div className={styles.EventContainer}>
            <h2>رویدادها</h2>
            <div className={styles.Event}>
                <Image src={Resource.Svg.COMMENT}/>
                <p>تولد شاهین نزدیک است</p>
                <Image src={Resource.Svg.CROSS}/>
            </div>
            <div className={styles.Event}>
                <Image src={Resource.Svg.COMMENT}/>
                <p>تولد شاهین نزدیک است</p>
                <Image src={Resource.Svg.CROSS}/>
            </div>
            <div className={styles.Event}>
                <Image src={Resource.Svg.COMMENT}/>
                <p>تولد شاهین نزدیک است</p>
                <Image src={Resource.Svg.CROSS}/>
            </div>
        </div>
    )
}

const LatestFeed = props => {
    return (
        <div className={styles.LatestFeed}>
            <Story props={props}/>
            <Event props={props}/>
        </div>
    );
};

LatestFeed.propTypes = {};

export default LatestFeed;
