import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Lam',
        age: 24
    }

    render() {

        return (
            <>
                <div className="first">
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