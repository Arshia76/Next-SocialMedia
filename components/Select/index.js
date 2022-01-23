import React from 'react';
import ReactSelect, {components,} from 'react-select'
import PropTypes from 'prop-types';
import styles from  './index.module.css'

const Select = props => {

    // const customStyles = {
    //     control: (styles, state) => ({
    //         ...styles,
    //         padding: '5px',
    //         borderRadius: '10px',
    //         width: '48vw',
    //         backgroundColor: '#505C68',
    //         border: '1px solid rgba(255, 255, 255, 0.21)'
    //     }),
    //     input: (styles, state) => ({
    //         ...styles,
    //         color: 'white'
    //     }),
    //     placeholder: (styles, state) => ({
    //         ...styles,
    //         color: 'white'
    //     }),
    //     singleValue: (styles, state) => ({
    //         ...styles,
    //         color: 'white'
    //     }),
    //     option: (styles, state) => ({
    //         ...styles,
    //         color: 'red'
    //     })
    // }

    const className = [];
    const classNamePrefix = [];

    if(props.className) className.push(styles[props.className])
    if(props.classNamePrefix) classNamePrefix.push(styles[props.classNamePrefix])

    const NoOptionsMessage = props => {
        return (
            <components.NoOptionsMessage {...props}>
                <span className="custom-css-class">موردی یافت نشد</span>
            </components.NoOptionsMessage>
        );
    };
    return (
        <div className={styles.SelectWrapper}>
            <h4 style={{marginBottom: '4px', fontWeight: '500'}} className={styles.SelectLabel}>{props.label}</h4>
            <div className={styles.SelectGroup}>
                <div className={`${props.error && 'error'}`}
                     style={{borderRadius: '11px', width: '100%', padding: '1px'}}>
                    <ReactSelect isSearchable={props.isSearchable} options={props.options} value={props.value}
                                 onChange={props.onChange} styles={props.styles}
                                 isMulti={props.isMulti}
                                 className={className.join(' ')} classNamePrefix={classNamePrefix.join(' ')}
                                 placeholder={props.placeholder} menuPlacement={props.menuPlacement}
                                 isRtl={props.isRtl} isClearable={props.isClearable} isDisabled={props.isDisabled}
                                 name={props.name} defaultMenuIsOpen={props.defaultMenuIsOpen}
                                 defaultValue={props.defaultValue}
                                 isOpen={props.isOpen} onBlur={props.onBlur}
                                 components={{NoOptionsMessage}}
                    />
                </div>
                {props.error && <h4>{props.error}</h4>}
            </div>
        </div>
    );
};

Select.defaultProps = {
    error: '',
    name: '',
    isSearchable: false,
    isClearable: true,
    isMulti: false,
    isRtl: false,
    isDisabled: false,
    defaultMenuIsOpen: false,
    defaultValue: null,
    isOpen: false,
    menuPlacement: null,
    options: [],
    value: null,
    placeholder: null,
    styles: {},
    label: '',
    className: null,
    classNamePrefix: null,
    onChange: _ => null,
    onBlur: _ => null
};

Select.propTypes = {
    error: PropTypes.string,
    name: PropTypes.string,
    isSearchable: PropTypes.bool,
    isMulti: PropTypes.bool,
    isClearable: PropTypes.bool,
    isRtl: PropTypes.bool,
    isDisabled: PropTypes.bool,
    defaultMenuIsOpen: PropTypes.bool,
    defaultValue: PropTypes.string,
    isOpen: PropTypes.bool,
    menuPlacement: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    styles: PropTypes.object,
    label: PropTypes.string,
    className: PropTypes.string,
    classNamePrefix: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};

export default Select;
