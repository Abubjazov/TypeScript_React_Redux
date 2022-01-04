import { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, fetchTodos, Todo } from '../actions'
import { StoreState } from '../reducers/index'

export interface AppProps {
    todos: Todo[]
    fetchTodos: Function
    deleteTodo: typeof deleteTodo
}

interface AppState {
    fetching: boolean
}

class _App extends Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props)

        this.state = { fetching: false }
    }

    componentDidUpdate(prevProps: AppProps): void {
        if(!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false })
        }
    }

    onButtonClick = (): void => {
        this.setState({ fetching: true })
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
    
    renderLoading(): JSX.Element {
        return <div>LOADING...</div>
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? this.renderLoading() : null}
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
