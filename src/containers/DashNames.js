import React from 'react';
import styled from "styled-components";


import Dash from '../containers/Dash'




class DashNames extends React.Component{  


    state = { beenClicked: false }
    
    localClickHandler =()=>{

        this.setState({ beenClicked: !this.state.beenClicked })
        console.log(this.props.actualDash)

    }




  //   ***  

  defaultActive =(dashClicked)=>{  console.log("123456789")   ///

    console.log("SHOWMEEEE🥁:   ", dashClicked)

    if(this.state.beenClicked === true){
        return(
            <Dash key={dashClicked.id} dash={dashClicked}

            allNotes={this.props.allNotes}
                editNoteHandler={this.props.editNoteHandler}


            allTasks={this.props.allTasks}

                newTaskHandler={this.props.newTaskHandler}

                taskDeleteHandler={this.props.taskDeleteHandler}
                    taskEditNameHandler={this.props.editTaskNameHandler}
                    taskEditDeetsHandler={this.props.taskEditDeetsHandler}
                taskCompleteOrNahHandler={this.props.taskCompleteOrNahHandler}

            switchLaynes={this.props.switchLaynes}


            allDashes={this.props.allDashes}
                dashDeleteHandler={this.props.dashDeleteHandler}

            
            //   clickHandler={props.clickHandler}
        />)
    }

  }

  //   ***  




  renderOneDashForMeTnx =(dashClicked)=>{  console.log("123456789")   ///

  //console.log("SHOWMEEEE🥁:   ", dashClicked)   ///

  if(this.state.beenClicked === true){
      return(
          <Dash key={dashClicked.id} dash={dashClicked}

          allNotes={this.props.allNotes}
              editNoteHandler={this.props.editNoteHandler}


          allTasks={this.props.allTasks}      
                       
                newTaskHandler={this.props.newTaskHandler} 

              taskDeleteHandler={this.props.taskDeleteHandler}
                  taskEditNameHandler={this.props.editTaskNameHandler}
                  taskEditDeetsHandler={this.props.taskEditDeetsHandler}
              taskCompleteOrNahHandler={this.props.taskCompleteOrNahHandler}
          switchLaynes={this.props.switchLaynes}


          allDashes={this.props.allDashes}
              dashDeleteHandler={this.props.dashDeleteHandler}

          
          //   clickHandler={props.clickHandler}
      />)
  }

}
    

    
    
    render(){ 
    return(<DashNameStylz><div><Text><br/>


        <H1><h1
            onClick={this.localClickHandler}
        >

          {this.props.actualDash.dash_name}
            {/* GIMME DAH NAYMZ */}

        </h1></H1>

        {this.renderOneDashForMeTnx(this.props.actualDash)}
        
    <br/></Text></div></DashNameStylz>)}  


}
export default DashNames




    const H1 = styled.h1`

        border-radius: 30px;

    `
const DashNameStylz = styled.div`
  

    border-radius: 30px;
    // inner-border-radius
    border: 80px solid #00b1ff;
// repeating-radial-gradient(circle farthest-corner at center center, #00b1ff 0%, rgba(0,85,255,0.83) 7%, #00d0ff 15%);
// -webkit-repeating-radial-gradient(circle farthest-corner at center center, #00b1ff 0%, rgba(0,85,255,0.83) 7%, #00d0ff 15%);
// -moz-repeating-radial-gradient(circle farthest-corner at center center, #00b1ff 0%, rgba(0,85,255,0.83) 7%, #00d0ff 15%);
    // border: 80px solid skyblue;

    box-shadow: inset 0 0 7px 4px rgba(0,0,255,.9);
        // .emphasize-inset {
        //     box-shadow: inset 0 0 7px 4px rgba(0,0,0,.5);
        //   }
      

`;
    const Text = styled.div`

        text-shadow: 2px 2px 5px #268237;

    `