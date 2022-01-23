import React from 'react';
import PostInput from '../projectComponents/PostInput'
import styles from '../styles/pages/Home.module.css'
import Sidebar from "../projectComponents/Sidebar";
import Post from "../projectComponents/Post";
import LatestFeed from "../projectComponents/LatestFeed";
import Chat from "../projectComponents/Chat";

const Home = () => {
    return (
        <div className={styles.MainBody}>
            <Sidebar/>
            <div className={styles.Middle}>
                <PostInput/>
                <Post/>
            </div>
            <div className={styles.ThirdPart}>
                <LatestFeed/>
                <Chat/>
            </div>
        </div>
    );
};

export default Home;
