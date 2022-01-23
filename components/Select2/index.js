import React from 'react';
import PropTypes from 'prop-types';
import Select2 from "react-select2-wrapper";

const Select = props => {
    return (
        <Select2
            defaultValue={2} // or as string | array
            data={[
                { text: 'bug', id: 1 },
                { text: 'feature', id: 2 },
                { text: 'documents', id: 3, disabled: true },
                { text: 'discussion', id: 4 },
            ]}
            options={{
                placeholder: 'جستجو...',
            }}
        />
    );
};

Select.propTypes = {

};

export default Select;
