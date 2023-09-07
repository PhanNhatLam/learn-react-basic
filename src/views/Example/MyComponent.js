import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Lam',
        age: 24
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)} />
                    Hello, my name is {this.state.name}
                </div>
                <div className="second">
                    My age is {this.state['age']}
                </div>
            </>
        )
    }

}

export default MyComponent;