import react, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import styles from './Svg.module.css'

const SVG = props => {

    const [xml,setXml] = useState(null)
    const classes = [styles.SVG];
    if (props.className)
        classes.push(styles[props.className] || props.className);

    const fetcher = (url = '') => {
        if (url)
            fetch(url.src, {})
                .then(response => response.text())
                .then(xml => {
                    setXml(xml);
                })
                .catch(message => {
                    console.log(message);
                });
    }

    const parse = (xml = '', dictionary = {}) => {
        const entries = Object.entries(dictionary);

        if (xml && entries.length)
            for (const entry of entries) {
                xml = xml.replace(`:${entry[0]}`, entry[1]);
            }

        return xml;
    }

    useEffect(() => {
        fetcher(props.src)
    }, [props.src])

    const newXml = parse(xml, props);

    return <a className={classes.join(' ')} dangerouslySetInnerHTML={{__html: newXml}}/>;


}


SVG.defaultProps = {
    src: null,
    className: null
};


SVG.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string
};

export default SVG