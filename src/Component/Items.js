import "./Item.css"
import PropTypes from 'prop-types';
const Items = (props) => {
    const {title,amount} = props
    return(
        <div>
        <li>{title}<span>{amount}</span></li>
        
        </div>
    );
}
Items.propTypes={
    title : PropTypes.string.isRequired,
    amount : PropTypes.number.isRequired
}
export default Items;