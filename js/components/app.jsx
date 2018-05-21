class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			movies: movies
		}
	}

	render(){
		return (
			<div id="movieApp">
				<MovieList moviesattr={this.state.movies} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));