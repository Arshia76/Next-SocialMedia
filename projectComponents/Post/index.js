import React from 'react';
import styles from './index.module.css'
import Image from 'next/image'
import PropTypes from 'prop-types';
import Carousel from "../../components/Carousel";
import Resource from '../../public/Resource'

const Post = props => {
    return (
        <div className={styles.PostInput}>
            <div className={styles.PostOwner}>
                <Image src={Resource.Images.MALEAVATAR}/>
                <div>
                    <h3>ارشیا نظرلطفی</h3>
                    <span>3 دقیقه پیش</span>
                </div>
                <Image src={Resource.Svg.DOT}/>
            </div>
            <div className={styles.PostBody}>
                <Carousel slidesToShow={1} slidesToScroll={1} className={'PostCarousel'}>
                    <div>
                        <Image
                            src={Resource.Images.ENVIRONMENT}/>
                    </div>
                    <div>
                        <Image
                            src={Resource.Images.ENVIRONMENT1}/>
                    </div>
                    <div>
                        <Image
                            src={Resource.Images.ENVIRONMENT2}/>
                    </div>
                    <div>
                        <Image
                            src={Resource.Images.ENVIRONMENT3}/>
                    </div>
                    <div>
                        <Image
                            src={Resource.Images.ENVIRONMENT4}/>
                    </div>
                </Carousel>
                <p>یک روز عالی رو با یک عکس عالی مشاهده می کنید</p>
            </div>
            <div className={styles.Actions}>
                <div>
                    <span>432</span>
                    <Image src={Resource.Svg.HEART}/>
                </div>
                <div>
                    <span>102</span>
                    <Image src={Resource.Svg.COMMENT}/>
                </div>
                <div>
                    <span>12</span>
                    <Image src={Resource.Svg.FORWARD}/>
                </div>
                <div>
                    <span>135K</span>
                    <Image src={Resource.Svg.EYEOPEN}/>
                </div>
            </div>
            <div className={styles.PostComment}>
                <div>
                    <Image src={Resource.Images.FEMALEAVATAR}/>
                    <h3>مریم حسینی</h3>
                    <span>مشاهده همه</span>
                </div>

                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                    مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                    درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                    را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                    اساسا مورد استفاده قرار گیرد.</p>

                <div className={styles.PostCommentActions}>
                    <span>1 دقیقه پیش</span>
                    <div>
                        <span>45</span>
                        <Image src={Resource.Svg.HEART}/>
                    </div>
                </div>
            </div>
            <div className={styles.Comment}>
                <Image src={Resource.Images.MALEAVATAR}/>
                <div>
                    <input type={'text'} placeholder={'نظر خود را بنویسید...'}/>
                    <Image width={50} height={50} src={Resource.Svg.ATTACHMENT}/>
                    <Image src={Resource.FilledSVG.CAMERAFILLED}/>
                    <Image src={Resource.Svg.EMOJI}/>
                </div>
                <div className={styles.CommentSendBtn}>
                    <Image src={Resource.Svg.SEND}/>
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {};

export default Post;
