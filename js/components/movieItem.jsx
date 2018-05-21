class MovieItem extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="movie">{this.props.info.title}</div>
		)
	}
}