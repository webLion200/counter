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
    // 你要什么属性放到组件中
    mapStateToProps,
    // 你要什么方法放到组件中，会自动dispatch
    actionCreator
)(App);