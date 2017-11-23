import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    render() {
        const {value, onIncrement, onDecrement, onIncrementAsync} = this.props
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
                <button onClick={onIncrementAsync}>
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
