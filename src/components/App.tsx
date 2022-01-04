import { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, fetchTodos, Todo } from '../actions'
import { StoreState } from '../reducers/index'

export interface AppProps {
    todos: Todo[]
    fetchTodos: Function
    deleteTodo: typeof deleteTodo
}

class _App extends Component<AppProps> {

    onButtonClick = (): void => {
        this.props.fetchTodos()
    }

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id)
    }

    renderTodos(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div 
                    key={todo.id}
                    onClick={() => this.onTodoClick(todo.id)}
                >{todo.title}</div>
            )
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
    { fetchTodos, deleteTodo }
)(_App)
