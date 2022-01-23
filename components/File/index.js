import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
import styles from './index.module.css'

const File = props => {

    const classes = [styles.fileContainer]
    if (props.className) classes.push(styles[props.className])

    return (
        <div className={classes.join(' ')}>
            <label onChange={props.onChange} className={styles.fileLabel} htmlFor={props.fileId}>
                <div style={{border: `${props.error ? '1px solid red' : '1px solid transparent'}`}}>
                    <h4 style={{color: `${props.file ? 'black' : '#43B8A3'}`}}>{props.file ? props.file.name : `${props.fileText}`}</h4>
                    <Image src={props.leadingImage} alt="file"/>
                </div>
                {props.previewImage && <div className={styles.fileImagePreview}>
                    {props.fileImages.length > 0 ?
                        props.images.map((img, idx) => <Image key={idx} src={URL.createObjectURL(img)}
                                                            alt="file-image"/>) :
                        <Image src={URL.createObjectURL(props.fileImages)} alt="file-image"/>
                    }
                </div>}
            </label>
            <input id={props.fileId}
                   onChange={props.onChange}
                   accept={props.acceptType}
                   type="file" style={{display: 'none'}}/>
        </div>
    );
};

File.defaultProps = {
    className: null,
    error: null,
    file: null,
    fileText: '',
    leadingImage: null,
    acceptType: null,
    fileId: 'file',
    previewImage: false,
    fileImages: null,
}

File.propTypes = {
    className: PropTypes.string,
    error: PropTypes.string,
    file: PropTypes.string,
    fileText: PropTypes.string,
    leadingImage: PropTypes.string,
    acceptType: PropTypes.string,
    fileId: PropTypes.string,
    previewImage: PropTypes.bool,
    fileImages: PropTypes.oneOf[PropTypes.array, PropTypes.string]
};

export default File;
