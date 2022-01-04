import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, Todo } from '../actions'
import { StoreState } from '../reducers/index'

export interface AppProps {
    todos: Todo[]
    fetchTodos(): any
}

class _App extends Component<AppProps> {

    onButtonClick = (): void => {
        this.props.fetchTodos()
    }

    renderTodos(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return <div key={todo.id}>{todo.title}</div>
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.renderTodos()}
            </div>
        )
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }
}

export const App = connect(
    mapStateToProps,
    { fetchTodos }
)(_App)
