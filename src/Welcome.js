import React from 'react';
// class Welcome extends React.Component {
//     render() {
//         return <h1 > Hello, Component < /h1>;
//     }
// }
//  传递父件参数（props）
class Welcome extends React.Component {
        constructor(props) {
            super(props);
            this.state = { date: new Date() };
            setInterval(() => {
                this.setState({
                    date: new Date()
                })
            })
        }
        render() {
            return ( <
                div >
                <
                h1 > Hello, { this.props.name } < /h1> <
                h2 > { this.state.date.toString() } < /h2> < /
                div >
            )
        }
    }
    //  等价于
    // function Welcome(props) {
    //     return <h1 > Hello, { props.name } < /h1>;
    // }

export default Welcome