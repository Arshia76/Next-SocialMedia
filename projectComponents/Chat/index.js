import React from 'react';
import Image from "next/image";
import styles from './index.module.css'
import PropTypes from 'prop-types';
import Resource from "../../public/Resource";
import Input from "../../components/Input";

const Chat = props => {
    return (
        <div className={styles.Chat}>
            <div className={styles.People}>
                <div>
                    <Image src={Resource.Images.MALEAVATAR}/>
                </div>
                <div>
                    <Image src={Resource.Images.MALEAVATAR}/>
                </div>
                <div>
                    <Image src={Resource.Images.MALEAVATAR}/>
                </div>
            </div>
            <div className={styles.ChatBox}>
                <div className={styles.ChatBoxHeader}>
                    <Image src={Resource.Svg.CROSSWHITE}/>
                    <Image src={Resource.Svg.MAXIMIZE}/>
                    <span>ارشیا نظرلطفی</span>
                </div>
                <div className={styles.ChatBoxBody}>
                    <div className={styles.ChatItem}>
                        <Image src={Resource.Images.FEMALEAVATAR}/>
                        <p>سلام چطوری جون دل برقراری عزیز </p>
                    </div>
                    <div className={styles.ChatItem}>
                        <Image src={Resource.Images.FEMALEAVATAR}/>
                        <p>سلام چطوری جون دل برقراری عزیز </p>
                    </div>
                    <div className={styles.ChatItem}>
                        <Image src={Resource.Images.FEMALEAVATAR}/>
                        <p>سلام چطوری جون دل برقراری عزیز </p>
                    </div>
                    <div className={styles.ChatItem}>
                        <Image src={Resource.Images.FEMALEAVATAR}/>
                        <p>سلام چطوری جون دل برقراری عزیز </p>
                    </div>
                    <div className={styles.ChatItem}>
                        <Image src={Resource.Images.FEMALEAVATAR}/>
                        <p>سلام چطوری جون دل برقراری عزیز </p>
                    </div>
                    <div className={styles.ChatItem}>
                        <Image src={Resource.Images.FEMALEAVATAR}/>
                        <p>سلام چطوری جون دل برقراری عزیز </p>
                    </div>
                    <div className={styles.ChatItem}>
                        <Image src={Resource.Images.FEMALEAVATAR}/>
                        <p>سلام چطوری جون دل برقراری عزیز </p>
                    </div>
                </div>
                <div className={styles.ChatInput}>
                    <Input type={'text'} placeholder={'تایپ کنید...'} icon={Resource.Svg.ATTACHMENT}
                           trailingIcon={Resource.Svg.EMOJI} className={'ChatInput'} groupClassName={'ChatGroup'}
                           fieldClassName={'ChatField'}/>
                    {/*<Image src={Resource.Svg.ATTACHMENT}/>*/}
                    {/*<input type={'text'} placeholder={'تایپ کنید...'}/>*/}
                    {/*<Image src={Resource.Svg.EMOJI}/>*/}
                </div>
            </div>
        </div>
    );
};

Chat.propTypes = {};

export default Chat;
