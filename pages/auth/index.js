import React, {useState} from 'react';
import Image from "next/image";
import Input from "../../components/Input";
import Button from "../../components/Button";
import DateTime from "../../components/DateTime";
import File from "../../components/File";
import Radio from "../../components/Radio";
import Resource from "../../public/Resource";
import Select2 from   "../../components/Select2";
import styles from '../../styles/pages/Auth.module.css'
import {CSSTransition} from "react-transition-group";

const Auth = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [animationType, setAnimationType] = useState('signup')

    const AuthSide = () => {
        return (
            <div className={styles.AuthSide}>
                <Image src={Resource.Images.LOGO}/>
                <h4>به پیام رسان خوش آمدید.</h4>
                <Button className={'AuthSideBtn'} title={isSignIn ? 'ثبت نام' : 'ورود'}
                        onClick={() => {
                            setIsSignIn(isSignIn => !isSignIn)
                            setAnimationType(animationType => animationType === 'signup' ? 'signin' : 'signup')
                        }}/>
            </div>
        )
    }

    const SignInTemplate = () => {
        return (
            <div className={styles.AuthChild}>
                <AuthSide/>
                <CSSTransition appear={animationType === 'signup'} in={animationType === 'signup'} timeout={1000} classNames={{
                    enterActive: styles.authFadeEnterActive,
                    enterDone: styles.authFadeEnterDone,
                    appear: styles.authFadeAppear,
                    appearActive: styles.authFadeAppearActive,
                    exitActive: styles.authFadeExit,
                    exitDone: styles.authFadeExitActive
                }}>
                    <div className={[styles.Sign, styles.SignIn].join(' ')}>
                        <h4>ورود</h4>
                        <div className={styles.SocialBtns}>
                            <Button icon={Resource.Images.GOOGLE} className={'SocialBtn'}/>
                            <Button icon={Resource.Images.FACEBOOK} className={'SocialBtn'}/>
                        </div>
                        <span>ورود از طریق نام کاربری</span>
                        <div className={styles.InputContainer}>
                            <Input fieldClassName={'AuthField'} className={'AuthInput'} name={'username'} type={'text'}
                                   icon={Resource.Svg.USER}
                                   placeholder={'نام کاربری خود را وارد کنید'}/>
                            <Input fieldClassName={'AuthField'} className={'AuthInput'} name={'password'}
                                   type={'password'} icon={Resource.Svg.PASSWORD2}
                                   placeholder={'رمز عبور خود را وارد کنید'}/>
                        </div>
                        <span className={styles.ForgotPassword}>رمز عبور خود را فراموش کردم؟</span>
                        <Button className={'SignBtn'} title={'ورود'}/>
                    </div>
                </CSSTransition>
            </div>
        );
    }

    const SignUpTemplate = () => {
        return (
            <div className={styles.AuthChild}>
                <AuthSide/>
                <CSSTransition appear={animationType === 'signin'} in={animationType === 'signin'} timeout={1000} classNames={{
                    enter: styles.authFadeEnter,
                    enterActive: styles.authFadeEnterActive,
                    appear: styles.authFadeAppear,
                    appearActive: styles.authFadeAppearActive,
                    exitActive: styles.authFadeExit,
                    exitDone: styles.authFadeExitActive
                }}>
                    <div className={[styles.Sign, styles.SignUp].join(' ')}>
                        <h4>ثبت نام</h4>
                        <div className={styles.SocialBtns}>
                            <Button className={'SocialBtn'} icon={Resource.Images.GOOGLE}/>
                            <Button className={'SocialBtn'} icon={Resource.Images.FACEBOOK}/>
                        </div>
                        <span>ثبت نام از طریق ورود اطلاعات</span>
                        <div className={[styles.InputContainer, styles.SignUpContainer].join(' ')}>
                            <Input fieldClassName={'AuthField'} className={'AuthInput'} name={'name'} type={'text'}
                                   icon={Resource.Svg.USER}
                                   placeholder={'نام خود را وارد کنید'}/>
                            <Input fieldClassName={'AuthField'} className={'AuthInput'} name={'family'} type={'text'}
                                   icon={Resource.Svg.USER}
                                   placeholder={'نام خانوادگی خود را وارد کنید'}/>
                            <Input fieldClassName={'AuthField'} className={'AuthInput'} name={'username'} type={'text'}
                                   icon={Resource.Svg.USER}
                                   placeholder={'نام کاربری خود را وارد کنید'}/>
                            <Input fieldClassName={'AuthField'} className={'AuthInput'} name={'password'}
                                   type={'password'} icon={Resource.Svg.PASSWORD2}
                                   placeholder={'رمز عبور خود را وارد کنید'}/>
                            <Input fieldClassName={'AuthField'} className={'AuthInput'} name={'email'} type={'email'}
                                   icon={Resource.Svg.EMAIL}
                                   placeholder={'ایمیل خود را وارد کنید'}/>
                            <Input fieldClassName={'AuthField'} className={'AuthInput'} name={'phone'} type={'number'}
                                   icon={Resource.Svg.PHONE}
                                   placeholder={'شماره موبایل خود را وارد کنید'}/>
                            <DateTime containerClassName={'DateTimeContainer'} inputClass={'BirthDateInput'}
                                      className={'BirthDateContainer'} fieldClassName={'BirthDateField'}
                                      name={'birthdate'} inputPlaceholder={'تاریخ تولد خود را وارد کنید'}
                                      editable={true}/>
                            <File leadingImage={Resource.Svg.ATTACHMENT} fileText={'عکس پروفایل خود را انتخاب کنید'}
                                  className={'Profile'}/>
                            <Select2/>
                            <div className={styles.Gender}>
                                <Radio className={'Gender'} title={'مرد'} name={'male'}/>
                                <Radio className={'Gender'} title={'زن'} name={'female'}/>
                            </div>
                        </div>
                        <Button className={'SignBtn'} title={'ثبت نام'}/>
                    </div>
                </CSSTransition>
            </div>
        )
    }

    return (
        <div className={styles.AuthContainer}>
            <div className={styles.UpBlob}>
                <Image src={Resource.Blob.AUTHUP}/>
            </div>
            {isSignIn ? <SignInTemplate/> : <SignUpTemplate/>}
            <div className={styles.DownBlob}>
                <Image src={Resource.Blob.AUTHDOWN}/>
            </div>
        </div>
    );
};

export default Auth;
