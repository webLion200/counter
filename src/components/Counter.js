import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    render() {
        const {value, onIncrement, onDecrement, onOncrementAsync} = this.props
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={onOncrementAsync}>
                    Increment async
                </button>
            </p>
        )
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter
