class MovieList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div id="movieList">
				{this.props.moviesattr.map((item, i) => <MovieItem key={i} info={item} />)}
			</div>
		)
	}
}