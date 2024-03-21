import React from 'react'
class UserClass extends React.Component {
    
    constructor(props){
        super(props)

        console.log(props)

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <>
                <div>count: {this.state.count}</div>
                <button onClick={() => this.setState({
                    count: this.state.count +2
                })}>increase count</button>
                <div>Name: {this.props.name}</div>
                <div>Localtion: Nottingham, UK</div>
                <div>Contact: +44 88776487384</div>
            </>
            
        )
    }
}

export default UserClass