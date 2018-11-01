import React, {Component} from 'react';
class Form extends Component {
    onBtnClick = async (e)=> {
        e.preventDefault();
        const city = e.target.city.value;
        const Key_api = "6b474aa0006c665bf1049403ef8c8ac6";
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather/?q=${city}&appid=${Key_api}`);
        const data = await api_call.json();
        data.cod !== 200 ?
        this.props.requestErrorAction(data):
        this.props.getWeatherAction(data)
    };
    componentDidMount(){
        this.props.fetchRequestAction();
    }
    render() {
        return (
            <div className="Form">
                <form onSubmit={this.onBtnClick}  className="form-inline">
                    <input className="form-control mr-sm-2" type="text" name="city" placeholder="Enter city name"  aria-label="Search" />
                    <button className="btn btn-outline-secondary my-2 my-sm-0">Search</button>
                </form>
            </div>
        )
    };
}
export default Form;