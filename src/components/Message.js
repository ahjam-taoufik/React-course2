
import { Component } from "react";

class Message extends Component {
       constructor(){
           super();
             this.state={
                 message1:`welcome, we have `,
                 message2:`Subscribers`,
                 count:0
             }
       }

      funcHandler() {
        this.setState({
            message:'thank you ',
            count:this.state.count+1
        })
        }
    render(){
       
        return <div>
                   <h3>{this.state.message1}{this.state.count} {this.state.message2}</h3>
                   {/* <h1>{this.state.count}</h1> */}
                   <button onClick={()=>this.funcHandler()}>click me</button>
              </div>
    }
}

export default Message;
