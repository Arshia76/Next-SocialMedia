import React, {useRef} from 'react';
import transition from "react-element-popper/animations/transition"
import PropTypes from 'prop-types';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker from "react-multi-date-picker"
import styles from './index.module.css'
import moment from "jalali-moment";
import Button from "../Button";
import Resource from "../../public/Resource";
import Input from "../Input";
import Utility from '../../Utility/Utility'
// import {toast} from "react-toastify";


const DateTime = props => {

    const ref = useRef()

    const handleChange = (date) => {
        if (date) {
            props.onDayClick(moment(date.toDate()).format('jYYYY/jMM/jDD'))
        }
    }

    const clear = () => {
        props.onDayClick('')
    }

    const today = () => {
        props.onDayClick(moment(new Date()).format('jYYYY/jMM/jDD'))
    }

    const close = () => {
        ref.current.closeCalendar()
    }

    const onOpen = () => {
        props.onDayClick('')
    }

    const minDate = props.minDate || moment().subtract(7, 'years').format('jYYYY/jMM/jDD')
    const maxDate = props.maxDate || moment().format('jYYYY/jMM/jDD')

    const classes = [];
    const containerClasses = []

    if(props.className)  classes.push(styles[props.className])
    if(props.containerClassName) containerClasses.push(styles[props.containerClassName])

    return (
        <DatePicker
            render={<CustomInput onDayClick={props.onDayClick} placeholder={props.inputPlaceholder}
                                 minDate={minDate} maxDate={maxDate} inputValue={props.inputValue}
                                 onDayChange={props.onDayChange} className={props.inputClass}
                                 fieldClassName={props.fieldClassName}/>}
            ref={ref}
            zIndex={20000000}
            disabled={props.disabled}
            name={props.name}
            id={props.id}
            readOnly={props.readOnly}
            onOpen={props.onOpen || onOpen}
            onClose={props.onClose}
            format={props.format}
            className={classes.join(' ')}
            containerClassName={containerClasses.join(' ')}
            range={props.range}
            disableDayPicker={props.disableDayPicker}
            disableMonthPicker={props.disableMonthPicker}
            disableYearPicker={props.disableYearPicker}
            currentDate={props.currentDate}
            minDate={props.minDate}
            maxDate={props.maxDate}
            editable={props.editable}
            placeholder={props.inputPlaceholder}
            value={props.inputValue}
            onChange={handleChange}
            showOtherDays={props.showOtherDays}
            weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
            inputClass={props.inputClass}
            calendar={persian}
            locale={persian_fa}
            animations={[
                transition({
                    from: 35,
                    transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                }),
            ]}
        >
            <div className={styles.Bottom}>
                <Button title={'امروز'} onClick={today} className={'dateBtn'}
                        style={{fontSize: '14px', width: 'max-content'}}/>
                <Button onClick={clear} className={'dateBtn'}
                        style={{fontSize: '14px', width: 'max-content'}}
                        title={'پاک کردن'}/>
                <Button onClick={close} className={'dateBtn'}
                        style={{fontSize: '14px', width: 'max-content'}}
                        title={'بستن'}/>
            </div>
        </DatePicker>
    );
};

const CustomInput = ({
                         openCalendar,
                         onDayChange,
                         inputValue,
                         onDayClick,
                         placeholder,
                         minDate,
                         maxDate,
                         className,
                         fieldClassName
                     }) => {

    return (
        <Input
        //     onBlur={() => {
        //     if (!inputValue || !moment(Utility.toEnglishDigits(inputValue.toString())).isValid()) {
        //         onDayClick('')
        //         onDayChange('')
        //
        //     } else if (moment(Utility.toEnglishDigits(inputValue.toString())).isAfter(moment(maxDate.toString())) || moment(Utility.toEnglishDigits(inputValue.toString())).isBefore(moment(minDate.toString()))) {
        //         // toast.error(`تاریخ انتخابی باید در بازه ${minDate} و ${maxDate} باشد `)
        //         onDayClick('')
        //         onDayChange('')
        //     } else {
        //         onDayClick(Utility.toEnglishDigits(inputValue.toString()))
        //         onDayChange(moment(Utility.toEnglishDigits(inputValue.toString())).format('YYYY/MM/DD'))
        //     }
        // }}
               imgClick={openCalendar} onChange={(e) => onDayChange(e.target.value)} className={className}
               icon={Resource.Svg.CALENDAR} fieldClassName={fieldClassName} value={inputValue}
               placeholder={placeholder}
        />
    )
}

DateTime.defaultProps = {
    editable: true,
    placeholder: '',
    value: '',
    weekDays: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
    inputClass: '',
    inputPlaceholder: '',
    calendarPosition: 'bottom-center',
    animations: [
        transition({
            from: 35,
            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
        }),
    ],
    format: 'YYYY/MM/DD',
    multiple: false,
    range: false,
    minDate: moment().subtract(7, 'years').format('jYYYY/jMM/jDD'),
    maxDate: moment().format('jYYYY/jMM/jDD'),
    disableMonthPicker: false,
    disableYearPicker: false,
    disableDayPicker: false,
    readOnly: false,
    disabled: false,
    name: '',
    id: '',
    title: '',
    currentDate: null,
    containerClassName: '',
    className: '',
    fieldClassName: '',
    showOtherDays: false,

    onChange: _ => null,
    onOpen: _ => null,
    onClose: _ => null,

}

DateTime.propTypes = {
    editable: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    weekDays: PropTypes.arrayOf(PropTypes.string),
    inputClass: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    calendarPosition: PropTypes.string,
    animations: PropTypes.array,
    format: PropTypes.string,
    multiple: PropTypes.bool,
    range: PropTypes.bool,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    disableMonthPicker: PropTypes.bool,
    disableYearPicker: PropTypes.bool,
    disableDayPicker: PropTypes.bool,
    showOtherDays: PropTypes.bool,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    currentDate: PropTypes.any,
    containerClassName: PropTypes.string,
    className: PropTypes.string,
    fieldClassName: PropTypes.string,
    onChange: _ => null,
    onOpen: _ => null,
    onClose: _ => null,
};

export default DateTime;
