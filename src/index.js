import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'
import counter, { incrementAsync } from './reducers'

const store = createStore(counter, applyMiddleware(thunk));

const render = () => ReactDOM.render(
    <App
        store={store}
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        onOncrementAsync={incrementAsync}
    />,
    document.getElementById('root')
)

render()
store.subscribe(render)
