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

            console.log('我已经在 constructor 里将 props 和 state 初始化好了')
        }
        componentWillMount() {
            console.log('运行到这里的话，说明马上就要运行 render 了')
        }
        render() {
            console.log('这里就是 render 了')
            return ( <
                div >
                <
                h1 > Hello, { this.props.name } < /h1> <
                h2 > { this.state.date.toString() } < /h2> < /
                div >
            )
        }
        componentDidMount() {
            console.log('已经挂载到页面里面了')
        }
    }
    //  等价于
    // function Welcome(props) {
    //     return <h1 > Hello, { props.name } < /h1>;
    // }

export default Welcome