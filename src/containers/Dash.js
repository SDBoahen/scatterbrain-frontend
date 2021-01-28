import React from 'react';

import styled from "styled-components";

import NewTaskForm from '../forms/NewTaskForm'
  import Task from '../components/Task'
import Note from '../components/Note'

class Dash extends React.Component{  

  state={

    locListOrder: [],
    // *** shifting (Task)s around and preferred sorting
    
    locCompleteTasks: [],
    locUncompleteTasks: []

  }
  localClickHandler =()=>{  console.log('DASH-click!') 
      //  xx~
      //  console.log(e.target)
  }








//// ------------------------ ////




  deleteButtonHandler =()=>{ console.log('DELETE: (Task)', this.props.taskObj) 
    this.props.deleteButtonHandler(this.props.task)
  }




////  - - - - - - - -  ////





  filteredDashNote =()=> {  //console.log("SHOW MY NOTE!....pleeeez")   ///
  
  let filteredNote = this.props.allNotes.filter(noteObj => 
    noteObj.dash_id === this.props.dash.id)
    //console.log(noteObj)  )   ///
  ////----
  //  -- (Note)(dash_id) === The(ID) of the (Dash) You Are On
  ////----
    //console.log("!!!!  ", filteredNote)   /// 




   return( 

    
    filteredNote.map(noteObj =>  //console.log('-> ', noteObj)   ///
    
      <Note key={noteObj.id} note={noteObj} 
        
        editNoteHandler={this.props.editNoteHandler}
       //  switchLaynes={this.props.switchLaynes}

       //  allDashes={this.props.allDashes}

    />)
        // <Note key={filteredNote[0].id} note={filteredNote[0]} />
   
   )
 
 
  }




//// ------------------------ ////




 // ***   
  // renderTasks =()=>{ //props.database.map( listObj => console.log('-> ', listObj) )
  //   return(this.props.allTasks.map( listObj =>    <Task key={listObj.id} task={listObj}
  //   //   clickHandler={props.clickHandler}
  //   /> )) 
  // }


  filteredDashTasks =()=> {  //console.log("SHOW MY TASKS!....pleeeez")   ///
   let filteredTasks = this.props.allTasks.filter(taskObj => 
   taskObj.dash_id === this.props.dash.id)




  //  if(true){
    //if(true){
    return( filteredTasks.map(taskObj =>  //console.log('-> ', taskObj)   ///
      <Task key={taskObj.id} task={taskObj} 

          deleteButtonHandler={this.props.taskDeleteHandler}
            editNameHandler={this.props.taskEditNameHandler}
            editDeetsHandler={this.props.taskEditDeetsHandler}
          completeOrNahHandler={this.props.taskCompleteOrNahHandler}
          switchLaynes={this.props.switchLaynes}

          allDashes={this.props.allDashes}

      />
    ))
  //  }
  
  

  
  }
    filterForCompleteTasks =()=>{

      let completeTasks = filteredTasks.filter(task => 
        task.task_complete === false
      )
      this.setState({ locCompleteTasks: completeTasks })

    }




//// ------------------------ ////




  ableToDelete =()=>{  //console.log("CAN'T DELETE DEFAULT DASH Kid!!!!")   ///

    if(this.props.dash.default_dash !== true){
      return(
        <button class="button DashxButton"
        onClick={this.deleteButtonHandler}>
          {"X "}
        </button>
      )
    }
  }

  
  // !!!!  CAN'T DELETE DEFAULT DASH  !!!!
  deleteButtonHandler =()=>{  console.log('DELETE: (Dask)', this.props.dash) 
    this.props.dashDeleteHandler(this.props.dash)
  }




  ////  - - - - - - - -  ////



  //  ***


    USEFORFINESSINGDEFAULTDASHABOVE =()=>{  //console.log("CAN'T DELETE DEFAULT DASH Kid!!!!")   ///

    if(this.props.dash.default_dash !== true){
      return(


        <>

        <button onClick={this.deleteButtonHandler}>{"{{ X }}"}</button>

        </>


        )
    }
  }
  // !!!!  CAN'T DELETE DEFAULT DASH  !!!!


  //   ***


  





//////// ----------{ Local }(Redner)-------------------- ////////
  



  render(){ return(<DashStylz><div onClick={this.localClickHandler}>
    



    {/* <br/><br/><br/><br/><br/><br/><br/><br/> */}

    < NewTaskForm 
      allDashes={this.props.allDashes}
        // dashOn  ***
      newTaskHandler={this.props.newTaskHandler}

      preface={"Add"}
      // color={}
    />
  
    {/* <h1>--------------------------------------------------</h1> */}

    <h1>🍃🎋🍃</h1>
      {/* <h1>Dash!</h1> */}

      {/* <button>{"{{ /\ }}"}</button> */}


      {this.ableToDelete()}
        {/* <button onClick={this.deleteButtonHandler}>{"{{ X }}"}</button> */}


      <h1>{this.props.dash.dash_name}</h1>


      < DashNote>
        {this.filteredDashNote()}
          {/* <Note /> */}
      </DashNote>


      <DashTasks>
        {this.filteredDashTasks()}
            {/* {this.renderTasks()}  */}
      </DashTasks>


      {/* <button>{"{{ \/ }}"}</button> */}

    {/* <h1>------------------------------</h1>  */}

      
    < NewTaskForm 
      allDashes={this.props.allDashes}
        // dashOn  ***
      newTaskHandler={this.props.newTaskHandler}

      preface={"Add"}
    />
      




  </div></DashStylz>)}

}
export default Dash







////////  * 8 * 8 * 8 * 8 *
////
////==========  STYLED COMPONENTS  ========================================////    
////
////////  * 8 * 8 * 8 * 8 *




  const DashStylz = styled.div`
    
    // color: yellow
    margin: 90px

    

  `




    const DashNote = styled.div`
    




    // color: yellow

    // background: yellow


    // border: 9px solid white;
    // border-radius: 20px;

    padding: 0rem 0;
    // padding: 0.5rem 0;


    // display: flex;
    // flex-wrap: in-line;


    // white-space: nowrap;
    // padding: 10000;
    
    `;





    
    const DashTasks = styled.div`
    

    border-radius: 30px;

      // // inner-border-radius
      // border: 9px solid skyblue;

    border: 33px solid #00b1ff;
    box-shadow: inset 0 0 7px 4px rgba(0,0,255,.9);

    
    
    color: blue

    
    // background: blue


    display: flex;
    flex-wrap: in-line;


    // white-space: nowrap;
    // padding: 10000;
    
    `;
