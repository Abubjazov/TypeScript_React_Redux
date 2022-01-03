import React from 'react'
import ReactDOM from 'react-dom'

interface AppProps {
    color?: string 
}

class App extends React.Component<AppProps> {
    state = { counter: 0 }

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1})
    }

    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1})
    }

    render() {
        return (
            <div>
                <button onClick={ this.onIncrement }>+</button>
                <button onClick={ this.onDecrement }>-</button>
                <h1>{ this.state.counter }</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
