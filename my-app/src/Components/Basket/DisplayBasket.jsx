import PropTypes from 'prop-types';

function DisplayBasket() {

    return (
        <div className='col'>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>Price: £{props.prc}</h5>
                    <div className='card-text'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>  {props.name}</li>
                            <li className='list-group-item'>  {props.quantity}</li>
                        </ul>
                        {/* <button className='btn btn-primary ' onClick={handleEdit}>Remove item</button>  */}
                        {buttonDisplay()}
                    </div>
                </div>
            </div>
        </div>
    );
}

Property.propTypes = {
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}

export default DisplayBasket;