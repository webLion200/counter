import React, {Component} from 'react'
import Counter from './Counter'

export default class App extends Component {
    render() {
        const {store, value,onIncrement, onDecrement, onIncrementAsync} = this.props;
        return (
            <Counter
                value = {value}
                onIncrement = {() => store.dispatch(onIncrement())}
                onDecrement = {() => store.dispatch(onDecrement())}
                onIncrementAsync = {() => store.dispatch(onIncrementAsync())}
            />
        )
    }
}