import React from 'react';
import Pagination from "react-js-pagination";
import './index.module.css'
import PropTypes from 'prop-types';

const Paginator = (props) => {
        return (
            <Pagination
                itemClassFirst={props.itemFirstClassName}
                itemClassLast={props.itemLastClassName}
                itemClassNext={props.itemNextClassName}
                itemClassPrev={props.itemPrevClassName}
                itemClass={props.itemClassName}
                activePage={props.activePage}
                itemsCountPerPage={props.itemsPerPage}
                totalItemsCount={props.total}
                pageRangeDisplayed={props.pageRange}
                onChange={props.onChange}
                firstPageText={props.firstTitle}
                lastPageText={props.lastTitle}
                prevPageText={props.prevTitle}
                nextPageText={props.nextTitle}
                innerClass={props.innerClass}
            />
        );
}


Paginator.defaultProps = {
    itemFirstClassName:null,
    itemLastClassName:null,
    itemNextClassName:null,
    itemPrevClassName:null,
    itemClassName:null,
    itemPerPage:null,
    pageRange:null,
    itemsPerPage:null,
    total:null,
    firstTitle:null,
    lastTitle:null,
    nextTitle:null,
    prevTitle:null,
    innerClass:'pagination',
    activePage:1,
    onChange:_ => null
}

Paginator.propTypes = {
    itemFirstClassName:PropTypes.string,
    itemLastClassName:PropTypes.string,
    itemNextClassName:PropTypes.string,
    itemPrevClassName:PropTypes.string,
    itemClassName:PropTypes.string,
    pageRange:PropTypes.number,
    itemsPerPage:PropTypes.number,
    total:PropTypes.number,
    firstTitle:PropTypes.string,
    lastTitle:PropTypes.string,
    nextTitle:PropTypes.string,
    prevTitle:PropTypes.string,
    innerClass:PropTypes.string,
    activePage: PropTypes.number,
    onChange:PropTypes.func
};

export default Paginator;
