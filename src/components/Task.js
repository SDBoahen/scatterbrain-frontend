import React from 'react';

import styled from "styled-components";

import TaskEditNameForm from '../forms/TaskEditNameForm'


class Task extends React.Component{  


  state = {
    
      id: this.props.task.id,
      dash_id: this.props.task.dash_id,
    task_name: this.props.task.task_name,
    task_deets: this.props.task.task_deets,
    

    completeBeenClicked: this.props.task.task_complete
    ,
    doneEditing: true
    ,
    nameBeenClicked: false,

    dashAt: ((this.props.task.dash_id)-1),
    selectedDashTo: [] // {}

  }
  

  localClickHandler =()=>{ console.log('TASK-click!') }






  

//// ------------------------ ////




  deleteButtonHandler =()=>{ console.log('DELETE: (Task)', this.props.taskObj) 
    this.props.deleteButtonHandler(this.props.task)
  }




  ////  - - - - - - - -  ////




  completeHandler =()=>{  //  ***  NEED TO REFLECT IN THE DATABASE !!!!  ***

    this.setState({ completeBeenClicked: !this.state.completeBeenClicked })

  }
  completeOrNah =()=>{  //console.log(this.props.taskObj," Done?😊👍 ")   ///
    
    //console.log(this.state.completeBeenClicked)   ///

    if(this.state.completeBeenClicked){
      return(
        <h2 onClick={this.completeHandler}>
        🎊🥳✅🥳🎊</h2>
      )
    }else{ return(
        <h2 onClick={this.completeHandler}>
        ✨🌞📶🌜✨</h2>
    )}
  

    //  ***
    // this.props.taskComplete(this.props.task)  //  ****
    //  ***


  }




  ////  - - - - - - - -  ////




  doneEditingTask =()=>{ 

    this.setState({ doneEditing: !this.state.doneEditing })

  }

  
  editTaskName =()=>{ 

    this.setState({ nameBeenClicked: !this.state.nameBeenClicked })

  }
  editOrShowName =()=>{  // - - (OnClick) : { Reder }(TaskEditNameForm) - - //

    console.log(this.state.nameBeenClicked)

    if(this.state.nameBeenClicked){  
      
      //  xx~
      //  this.doneEditingTask()

      return(
        
        <TaskEditNameForm 
          editNameHandler={this.props.editNameHandler}
          taskEditing={this.props.task}
            editTaskName={this.editTaskName}            
            doneEditingTask={this.state.doneEditingTask}  //  ~xx

          // idOfTaskEditing={this.props.task.id}
          // onClick={this.editTaskName} 
        />

      )
    }else{ return(  // - - DEFAULT : { Show }(task_name) - - //

      <h2 onClick={this.editTaskName}>
        {this.props.task.task_name}</h2>

    )}

  }




  //// ------------------------ ////




  taskDeetsChangeHandler =(e)=>{ this.setState({[e.target.name]: e.target.value }) 
    console.log('EVENT: ', e.target.value)


    this.props.editDeetsHandler(this.state)


  }




  //// ------------------------ ////




  dropDownHandler =(e)=>{  
    console.log("Switchin' /DASHES/--for-->  ", 
    this.props.task.task_name, this.props.task , e.target.value )   ///
    // this.props.dropDownHandler(this.props.task)


    let newDash = this.props.allDashes.filter(dash => dash.dash_name === e.target.value)
    //  let newDash = this.props.allDashes.filter(dash => dash.id === e.target.value)
                                                                //  ***  ID
    this.setState({ selectedDashTo: newDash });
      // this.setState({ selectedDashTo: e.target.value });


  }
      switchLaynes =(dashTo)=>{  


        console.log("Switchin' /DASHES/--to-->  "
        ,
        dashTo
        ,
        dashTo.dash_name, dashTo.id)   ///

        this.props.switchLaynes(this.props.task, dashTo.id)
        

      }
    dropDownChangeHandler =()=>{  


      this.switchLaynes(this.state.selectedDashTo[0])

      //  *** ANOTHER FUNCTION 
      // this.props.dropDownHandler(this.props.task)


    }




  ////  - - - - - - - -  ////



  
    //  ***


    // dashOption =(dashIn)=>{ 
    // // {
    // return(<div><option>*</option></div>)
    // // }
    // }
   renderDashOptions =()=>{  return(
    this.props.allDashes.map(dash =>  //console.log(dash)   ///

      <option value={dash.dash_name}>
      {dash.dash_name}</option>

      //<option>*</option>

      //  xx~
      // this.dashOption(dash)
      //  xx~

    ))
    }

  
    //  ***




  //// ------------------------ ////








//////// ----------{ Local }(Render)-------------------- ////////
  



  render(){ 
    

    //  ***  just use state 🤷🏾‍♂️
    let dashAt = ((this.props.task.dash_id)-1)

    
    return(<TaskStylz><div><TaskText><h1>✨🌱🕳🍃🕳🍃🕳🍃🕳🍃✨</h1>
        {/* <h1>Task!</h1> */}

      {/* <button>[ /\ ]</button> */}
      
      <TaskXButton>
        <button onClick={this.deleteButtonHandler}
          class="button xButton"
        >
          X
        </button>
      </TaskXButton>

      {this.completeOrNah()}
        {/* {this.completeHandler()} */}
      

      {this.editOrShowName()}
        {/* <h2 onClick={this.localClickHandler}>{"..."}{this.props.task.task_name}</h2> */}
        {/* Task-Name</h2> */}


      <TextArea 

        name="task_deets"
        value={this.state.task_deets}
        onChange={this.taskDeetsChangeHandler}
        rows={5}

      />
        {/* <textarea>!</textarea> */}


      <br/>

      <select
        onClick={this.dropDownHandler}
        onChange={this.dropDownChangeHandler}
        // e.target.value
      >




        {/*  *** dashAt  !!  */}

        <option value={this.props.allDashes[dashAt].id} disabled >
          {this.props.allDashes[dashAt].dash_name}
        </option>
          {/* <option defaultValue={this.props.allDashes[dashAt].id}>
            {this.props.allDashes[dashAt].dash_name}
          </option> */}
        

        <option value={this.props.allDashes[dashAt].dash_name}>
          {this.props.allDashes[dashAt].dash_name}
        </option>
        {/*  ***  WHILE RENDERING DASHES - SKIP THE ONE YOU'RE ON  ***  */}


        {/* <option value={this.props.allDashes[0].dash_name}>
          {this.props.allDashes[0].dash_name}</option>
        <option value={this.props.allDashes[1].dash_name}>
          {this.props.allDashes[1].dash_name}</option>

        <option value={this.props.allDashes[2].dash_name}>
          {this.props.allDashes[2].dash_name}</option> */}


        {this.renderDashOptions()}




      </select>
      {/* <br/><button>[ \/ ]</button> */}

    <h1>✨🍃🕳🍃🕳🍃🕳🍃🕳🌿✨</h1></TaskText></div></TaskStylz>)}  
    // -•-•-•-•-•-•-•-•-•-

}
export default Task







////////  * 8 * 8 * 8 * 8 *
////
////==========  STYLED COMPONENTS  ========================================////    
////
////////  * 8 * 8 * 8 * 8 *


  const TaskXButton = styled.div`
    
  // color: yellow
  // background: blue


  // display: inline-block;

  // border-radius: 3px;
  // padding: 0.5rem 0;
  // margin: 0.5rem 1rem;
  // width: 11rem;
  // background: transparent;
  // color: white;
  // border: 2px solid white;

  `;





  const TaskStylz = styled.div`
  
      margin: 90px;
      padding: 30px;
  
  border-radius: 100px;
  background: tan;
    // PREVIOUSLY: { #E3B23C; #D69F1F; }
  box-shadow: 8px 8px 16px #663000


  // color: yellow


  // display: inline-block;

  // border-radius: 3px;
  // padding: 0.5rem 0;
  // margin: 0.5rem 1rem;
  // width: 11rem;
  // background: transparent;
  // color: white;
  // border: 2px solid white;

  `;
    const TaskText = styled.div`

      color: white;
      text-shadow: 2px 2px 5px black;
    
    `

      const TextArea = styled.textarea`
        
        width: 250px;
        border-radius: 25px;
        background: light-tan
          // rgba(0,253,255,0.29)
        // background: red;

      `

      // const xButton = styled.button`
      
      
      // `
