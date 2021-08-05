import './styles.scss'

const App = () => {
    return (
        <div>
            {process.env.NODE_ENV}
            <h1>Ciao!!!!</h1>
            {process.env.name}
        </div>
    )
}

export default App
