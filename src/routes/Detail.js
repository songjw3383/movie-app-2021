import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const {location } = this.props;
        console.log(location)
        if (location.state) {
            return (
            <div className="MovieDetail">
                <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                <div className="moreDetail">
                    <span className="title">{location.state.title}</span>
                    <span className="year">{location.state.year}</span>
                    <ul className="genres">{location.state.genres.map((genre,index) =>(<li key={index} className="genres__genre">{genre}</li>))}</ul>
                    <span className="runtime">{location.state.runtime} mins</span>
                    <p className="summary">{location.state.summary}</p>
                </div>
            </div>
            )
        } else {
            return null;
        }
    }
}
export default Detail;