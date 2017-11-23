import React, {Component} from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'
import {increment, decrement, incrementAsync} from '../reducers'

class App extends Component {
    render() {
        return (
            <Counter
                value = {this.props.number}
                onIncrement = {this.props.increment}
                onDecrement = {this.props.decrement}
                onOncrementAsync = {this.props.incrementAsync}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    number : state
});

const actionCreator = {increment, decrement, incrementAsync};       //  mapPropsToStatus

export default connect(
    mapStateToProps,
    actionCreator
)(App);