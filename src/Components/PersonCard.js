import React, {Component} from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increaseAge =(e) =>{
        this.setState({count: this.state.count+1})
    }
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
      return (
        <>
            <li className="list-group-item">
                {lastName} , {firstName}
            </li>
            <li className="list-group-item">
                Age: {age + this.state.count}
            </li>
            <li className="list-group-item">
                Hair Color: {hairColor}
            </li>
            <div className="text-center mt-3">
              <button onClick={this.increaseAge} className="btn-primary text-light">Birthday Button</button>
            </div>


            
  
        </>
      );
    }
  }



export default PersonCard;