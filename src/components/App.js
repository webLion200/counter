import React, {Component} from 'react'
import Counter from './Counter'

export default class App extends Component {
    render() {
        const {store, value,onIncrement, onDecrement, onOncrementAsync} = this.props;
        return (
            <Counter
                value = {value}
                onIncrement = {onIncrement}
                onDecrement = {onDecrement}
                onOncrementAsync = {() => store.dispatch(onOncrementAsync())}
            />
        )
    }
}