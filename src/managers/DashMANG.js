import React from 'react';

import styled from "styled-components";


import Header from '../components/Header'

import Dash from '../containers/Dash'
import DashNames from '../containers/DashNames'

import NewDashForm from '../forms/NewDashForm'
import NewTaskForm from '../forms/NewTaskForm'

// import Task from '../components/Task'




class DashMANG extends React.Component{  

    state = {


    accountaBuddy: {},
    databaseAccountaBuddies: [],


    databaseDashes: []
      ,
      databaseDashNotes: []
      ,

    databaseTasks: [],

      //database: [],

    // searchterm: '' 


    }    



    setAccountaBuddie =(buddie)=>{  console.log(buddie)   ///
    
      //

    }




    



////////==========  (Note)  ========================================////////




editNoteHandler =(noteToUpdate)=>{  //console.log(`SUMBIT-NewNote!`)   ///
  console.log("(note) TO EDIT:  ", noteToUpdate);   ///

    const NOTE_URL = `http://localhost:3000/api/v1/notes/${noteToUpdate.id}`

  fetch(NOTE_URL,
  //fetch("http://localhost:3000/api/v1/notes/1",  
    {
      method: "PATCH",
      headers: 
      { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(//newNote
        {
          //  ***
          note: noteToUpdate
          //  ***
        }
      ),
    }
  )
  .then(response => response.json())
  .then(noteUpdating => {
    console.log('Success!', noteUpdating)   ///

    //  *** 
      let noteDatabaseToUpdate = [...this.state.databaseNotes]
    //  *** 

    
      let noteIndex = noteDatabaseToUpdate.findIndex(note => note.id === noteUpdating.id)
      noteDatabaseToUpdate[noteIndex] = noteUpdating
    
      this.setState({ databaseNotes: noteDatabaseToUpdate })

    // this.setState({ databaseNotes: [noteUpdating, ...this.state.databasenotes] })

  })
  .catch( (error) => {
    console.error('Error:', error);
  });


  }

  






////////==========  (Task)  ========================================////////




  newTaskSubmitHandler =(newTask)=>{  //console.log(`SUMBIT-NewTask!`)   ///
  console.log("OBJ TO CREATE:  ", newTask);   ///
  
    const TASK_URL = "http://localhost:3000/api/v1/tasks"

  fetch(TASK_URL,
   //fetch("http://localhost:3000/api/v1/tasks",  
    {
      method: "POST",
      headers: 
      { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(//newTask
        {
          dash_id: newTask.dash_id,
          task_name: newTask.taskName,
          task_complete: newTask.taskComplete
        }
      ),
    }
  )
  .then(response => response.json())
  .then(newTask => {
     //console.log(newTask)   ///
     this.setState({ databaseTasks: [...this.state.databaseTasks, newTask] })
      //console.log('Success:', newTask);
  })

  
  }




////  - - - - - - - -  ////




  editTaskNameHandler =(taskToUpdate)=>{  //console.log(`SUMBIT-NewTask!`)   ///
    console.log("(Task) TO EDIT:  ", taskToUpdate);   ///

      const TASK_URL = `http://localhost:3000/api/v1/tasks/${taskToUpdate.id}`

    fetch(TASK_URL,
    //fetch("http://localhost:3000/api/v1/tasks/1",  
      {
        method: "PATCH",
        headers: 
        { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(//newTask
          {
            task: taskToUpdate
          }
          // {
          //   task_name: updatedName
          // }
        ),
      }
    )
    .then(response => response.json())
    .then(taskUpdating => {
      console.log('Success!', taskUpdating)   ///

        let taskDatabaseToUpdate = [...this.state.databaseTasks]
      
        let taskIndex = taskDatabaseToUpdate.findIndex(task => task.id === taskUpdating.id)
        taskDatabaseToUpdate[taskIndex] = taskUpdating
      
        this.setState({ databaseTasks: taskDatabaseToUpdate })

      // this.setState({ databaseTasks: [taskUpdating, ...this.state.databaseTasks] })

    })
      // .then(taskUpdating => {
      //   console.log('Success!', taskUpdating)   ///

      //     let taskDatabaseToUpdate = [...this.state.databaseTasks]
        
      //     let taskIndex = taskDatabaseToUpdate.findIndex(task => task.id === taskUpdating.id)
      //     taskDatabaseToUpdate[taskIndex] = taskUpdating
        
      //     this.setState({ databaseTasks: taskDatabaseToUpdate })

      //   // this.setState({ databaseTasks: [taskUpdating, ...this.state.databaseTasks] })

      // })
    .catch( (error) => {
      console.error('Error:', error);
    });


    }




////  - - - - - - - -  ////




taskCompleteOrNahHandler =(taskToUpdate)=>{  //console.log(`SUMBIT-NewTask!`)   ///
  console.log("(Task) (complete)/(not_complete):  ", taskToUpdate);   ///

    const TASK_URL = `http://localhost:3000/api/v1/tasks/${taskToUpdate.id}`

  fetch(TASK_URL,
  //fetch("http://localhost:3000/api/v1/tasks/1",  
    {
      method: "PATCH",
      headers: 
      { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(//newTask
        {
          task_deets: taskToUpdate.task_complete
        }
      ),
    }
  )
  .then(response => response.json())
  .then(taskUpdating => {
    console.log('Success!', taskUpdating)   ///

      let taskDatabaseToUpdate = [...this.state.databaseTasks]
    
      let taskIndex = taskDatabaseToUpdate.findIndex(task => task.id === taskUpdating.id)
      taskDatabaseToUpdate[taskIndex] = taskUpdating
    
      this.setState({ databaseTasks: taskDatabaseToUpdate })

    // this.setState({ databaseTasks: [taskUpdating, ...this.state.databaseTasks] })

  })
  .catch( (error) => {
    console.error('Error:', error);
  });


  }




////  - - - - - - - -  ////




taskEditDeetsHandler =(taskToUpdate)=>{  //console.log(`SUMBIT-NewTask!`)   ///
  console.log("(Task) TO EDIT:  ", taskToUpdate);   ///

    const TASK_URL = `http://localhost:3000/api/v1/tasks/${taskToUpdate.id}`

  fetch(TASK_URL,
  //fetch("http://localhost:3000/api/v1/tasks/1",  
    {
      method: "PATCH",
      headers: 
      { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(//newTask
        {
          task_deets: taskToUpdate.task_deets
        }
      ),
    }
  )
  .then(response => response.json())
  .then(taskUpdating => {
    console.log('Success!', taskUpdating)   ///

      let taskDatabaseToUpdate = [...this.state.databaseTasks]
    
      let taskIndex = taskDatabaseToUpdate.findIndex(task => task.id === taskUpdating.id)
      taskDatabaseToUpdate[taskIndex] = taskUpdating
    
      this.setState({ databaseTasks: taskDatabaseToUpdate })

    // this.setState({ databaseTasks: [taskUpdating, ...this.state.databaseTasks] })

  })
  .catch( (error) => {
    console.error('Error:', error);
  });


  }




////  - - - - - - - -  ////




  taskDeleteHandler =(taskToDELETE)=>{  console.log(taskToDELETE, " Will Be OBLITERATED")

      fetch(`http://localhost:3000/api/v1/tasks/${taskToDELETE.id}`, {
      method: 'DELETE'
      })
      .then(res => res.json())
      .then(res => console.log(res))
    
      let arrayWithDeletedTask = [...this.state.databaseTasks]
      let newTaskDatabase = arrayWithDeletedTask.filter(task => task.id !== taskToDELETE.id)
      this.setState({ databaseTasks: newTaskDatabase })
    
      //console.log('GONE!')
    
  }








//// ------------------------ ////








  switchLaynes =(taskToUpdate, dash_id)=>{ 

    console.log("(Task) TO EDIT:  ", taskToUpdate);   ///


    //  ***
    // dash_id = (dash_id-1)
    //  ***


    const TASK_URL = `http://localhost:3000/api/v1/tasks/${taskToUpdate.id}`

    fetch(TASK_URL,
      //fetch("http://localhost:3000/api/v1/tasks/1",  
      {
        method: "PATCH",
        headers: 
        { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(//newTask
          {
            //  ***
            dash_id: dash_id
            //  ***
          }
        ),
      }
    )
    .then(response => response.json())
    .then(taskUpdating => {
      console.log('Success!', taskUpdating)   ///

        let taskDatabaseToUpdate = [...this.state.databaseTasks]
      
        let taskIndex = taskDatabaseToUpdate.findIndex(task => task.id === taskUpdating.id)
        taskDatabaseToUpdate[taskIndex] = taskUpdating
      
        this.setState({ databaseTasks: taskDatabaseToUpdate })

      // this.setState({ databaseTasks: [taskUpdating, ...this.state.databaseTasks] })

    })
    .catch( (error) => {
      console.error('Error:', error);
    });

    
  }
















////////==========  (Dash)  ========================================////////

  


    newDashSubmitHandler =(newDash)=>{  //console.log(`SUMBIT-NewDASH!`)   ///
      //console.log("OBJ TO CREATE:  ", newDash);   ///
      
        const DASH_URL = "http://localhost:3000/api/v1/dashes"

      fetch(DASH_URL,
         //fetch("http://localhost:3000/api/v1/dashes",
        {
          method: "POST",
          headers: 
          { 
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(//newDash
            {
              dash_name: newDash.dashName,
              default_dash: false
            }
          ),
        }
      )
      .then(response => response.json())
      .then(newDash => {
         //console.log(newDash)   ///
         this.setState({ databaseDashes: [...this.state.databaseDashes, newDash] })
          //console.log('Success:', newDash);
      })

      
    }




    ////  - - - - - - - -  ////
    



    dashDeleteHandler =(dashToDELETE)=>{  console.log(dashToDELETE, " Will Be OBLITERATED")

        fetch(`http://localhost:3000/api/v1/dashes/${dashToDELETE.id}`, {
         method: 'DELETE'
         })
         .then(res => res.json())
         .then(res => console.log(res))
      
         let arrayWithDeletedDash = [...this.state.databaseDashes]
         let newDashDatabase = arrayWithDeletedDash.filter(dash => dash.id !== dashToDELETE.id)
         this.setState({ databaseDashes: newDashDatabase })
      
         //console.log('GONE!')
      
    }








    //// ------------------------ ////
    
    





    renderDashesNames =()=>{ //props.database.map( dashObj => console.log('-> ', dashObj) )
      return(this.state.databaseDashes.map( dashObj => 

        <DashNames
          // <h2

          key={dashObj.id}
          actualDash={dashObj}


          allNotes={this.state.databaseDashNotes}
          editNoteHandler={this.editNoteHandler}


          allTasks={this.state.databaseTasks}

            newTaskHandler={this.newTaskSubmitHandler}

            taskDeleteHandler={this.taskDeleteHandler}
              taskEditNameHandler={this.editTaskNameHandler}
              taskEditDeetsHandler={this.taskEditDeetsHandler}
            taskCompleteOrNahHandler={this.taskCompleteOrNahHandler}

          switchLaynes={this.switchLaynes}


          allDashes={this.state.databaseDashes}
            dashDeleteHandler={this.dashDeleteHandler}


    

          // onClick={this.renderOneDashForMeTnx(dashObj)}
          // >
          // {dashObj.dash_name}
          // {/* </h2> */}




        />

      )) 
    }
    renderDashes =()=>{ //props.database.map( dashObj => console.log('-> ', dashObj) )
    return(this.state.databaseDashes.map( dashObj => 
      <Dash key={dashObj.id} dash={dashObj}

        allNotes={this.state.databaseDashNotes}
          editNoteHandler={this.editNoteHandler}


        allTasks={this.state.databaseTasks}

          newTaskHandler={this.newTaskSubmitHandler}

          taskDeleteHandler={this.taskDeleteHandler}
            taskEditNameHandler={this.editTaskNameHandler}
            taskEditDeetsHandler={this.taskEditDeetsHandler}
          taskCompleteOrNahHandler={this.taskCompleteOrNahHandler}

        switchLaynes={this.switchLaynes}


        allDashes={this.state.databaseDashes}
          dashDeleteHandler={this.dashDeleteHandler}

        
        //   clickHandler={props.clickHandler}
      /> )) 
    }
    









    





  ////////  * 8 * 8 * 8 * 8 *
  ////
  ////==========  (DashMANG)  ========================================////    
  ////
  ////////  * 8 * 8 * 8 * 8 *




  componentDidMount(){


    fetch('http://localhost:3000/api/v1/dashes')
    .then(response => response.json())
    .then(fetchedAry => this.setState({ databaseDashes: fetchedAry }))
    //.then(console.log)


    fetch('http://localhost:3000/api/v1/notes')
    .then(response => response.json())
    .then(fetchedAry => this.setState({ databaseDashNotes: fetchedAry }))
    //.then(console.log)


    //  ~  -  Can Technically be shifted to the (Dash)(LEVEL)
     fetch('http://localhost:3000/api/v1/tasks')
    .then(response => response.json())
    .then(fetchedAry => this.setState({ databaseTasks: fetchedAry }))
    //.then(console.log)


    fetch('http://localhost:3000/api/v1/accounta_buddies')
    .then(response => response.json())
    .then(fetchedAry => this.setState({ databaseAccountaBuddies: fetchedAry }))
    //.then(console.log)
    

   }




    render(){ return(
    
      // <Dashes>
      <div><Text>
        

      <Scatter ><h1    class="floating" >
      ☁️💭☁️💭☁️✨
      <Sun>
        ✨Scattrr🌞Brain✨
      </Sun>
      ✨☁️💭☁️💭☁️
      
      </h1></Scatter>


    
      
<FlexWrapper>




      <Flowerz>
      <h3>
      🌱🌳🍃🌸🍃🌿🌺🌿🍃🌼🍃  🌸🍃🌿🌼🌿🍃🌺🍃  🌼🍃🌿🌸🌿🍃🌺🍃     🍃🌸🍃🌿🌺🌿🍃🌼🍃  🌸🍃🌿🌼🌿🍃🌺🍃  🌼🍃🌿🌸🌿🍃🌺🍃     🍃🌸🍃🌿🌺🌿🍃🌼🍃  🌸🍃🌿🌼🌿🍃🌺🍃  🌼🍃🌿🌸🌿🍃🌺🍃🌳🍃  
      </h3>
      </Flowerz>




 <NoFlexHereThoTnx>




 <DashNAYMZandFRENDZtehe>




      <Header
        accountaBuddy={this.state.databaseAccountaBuddies}
        allDashes={this.state.databaseDashes}
      />
       {/* <br/><h1>✨🍃🌱🌿🌳🌿🌱🍃Hi Pal!💛🐢🌱🌿🌳🌿🌱🍃✨</h1><br/> */}
       {/* <h1>🦾DashMANG!</h1> */}




 {/* </FlexWrapper> */}




   <Formz>

    <NewDashForm newDashHandler={this.newDashSubmitHandler}
    />
    <NewTaskForm newTaskHandler={this.newTaskSubmitHandler}
      allDashes={this.state.databaseDashes}
      preface={"Create"}
    />

   </Formz>
   
    <br/><br/><br/><br/><br/>




      <span>
        {this.renderDashesNames()}
      </span>




 </DashNAYMZandFRENDZtehe>
    



 {/* </NoFlexHereThoTnx> */}




    <br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/>


    <Dashes>

      {/* {this.renderDashes()} */}
      {this.renderDashes()}

    </Dashes>
      {/* <Task/> */}


     <br/><br/><br/><br/><br/>




 </NoFlexHereThoTnx>


</FlexWrapper>




  </Text></div>
    // </Dashes>


    )}  
    

}
export default DashMANG







////////  * 8 * 8 * 8 * 8 *
////
////==========  STYLED COMPONENTS  ========================================////    
////
////////  * 8 * 8 * 8 * 8 *





  const FlexWrapper = styled.div`
      
  display: flex;
  // flex-wrap: in-line;
  // font-size: 50px


  `;
  const NoFlexHereThoTnx = styled.div`
      
  display: no-flex;
  // font-size: 50px


  `;




    const Text = styled.div`

    text-shadow: 2px 2px 5px #268237;

    `
  const Scatter = styled.div`
  

  background: #00fff1;
  background: radial-gradient(circle farthest-corner at center center, #00fff1 0%, #00dfff 15%, rgba(71,177,255,0.58) 35%, #00c0ff 55%, #00a2ff 75%, #40ddff 90%, #00ffef 99%);
  background: -webkit-radial-gradient(circle farthest-corner at center center, #00fff1 0%, #00dfff 15%, rgba(71,177,255,0.58) 35%, #00c0ff 55%, #00a2ff 75%, #40ddff 90%, #00ffef 99%);
  background: -moz-radial-gradient(circle farthest-corner at center center, #00fff1 0%, #00dfff 15%, rgba(71,177,255,0.58) 35%, #00c0ff 55%, #00a2ff 75%, #40ddff 90%, #00ffef 99%);
      
  // background: #0076ff;
  // background: repeating-linear-gradient(36deg,#0076ff 0%, #00fffe 15%, #464dfa 25%, #00b3ff 35%, #0076ff 45%, #00a4ff 55%, #67f5f5 65%, #00d2ff 75%, #46bece 100%);
  // background: -webkit-repeating-linear-gradient(36deg,#0076ff 0%, #00fffe 15%, #464dfa 25%, #00b3ff 35%, #0076ff 45%, #00a4ff 55%, #67f5f5 65%, #00d2ff 75%, #46bece 100%);
  // background: -moz-repeating-linear-gradient(36deg,#0076ff 0%, #00fffe 15%, #464dfa 25%, #00b3ff 35%, #0076ff 45%, #00a4ff 55%, #67f5f5 65%, #00d2ff 75%, #46bece 100%);
  //   // background: green;

  box-shadow: 8px 8px 16px #eeffad;
    // #67f5f5;
  font-size: 50px;
  



  `;
  const Sun = styled.div`
    
  color: grey
  font-size: 50px
  text-color:gray



  `;
  const Flowerz = styled.div`
    
  font-size: 90px

  `;



  const Formz = styled.div`

  
    background: #00ff58;
    background: radial-gradient(circle farthest-corner at center center, #00ff58 0%, #7de87b 15%, #4dd660 30%, #15b32e 55%, #00ff58 70%, #21cc21 99%);
    background: -webkit-radial-gradient(circle farthest-corner at center center, #00ff58 0%, #7de87b 15%, #4dd660 30%, #15b32e 55%, #00ff58 70%, #21cc21 99%);
    background: -moz-radial-gradient(circle farthest-corner at center center, #00ff58 0%, #7de87b 15%, #4dd660 30%, #15b32e 55%, #00ff58 70%, #21cc21 99%);
  // background: green;
  
  display: flex;


  border-radius: 30px;
  border: 80px solid #00b1ff;
  box-shadow: inset 0 0 7px 4px rgba(0,0,255,.9);

  // border: 9px solid skyblue;
  // shadow: 10


  align-text: center;
  align-items: center;
  justify-content: center;

  padding: 33px;

  
  `;



  const DashNAYMZandFRENDZtehe = styled.div`
  
    width: 20%;
    // height: 10%;
  
  `;
  const Dashes = styled.div`
  
  display: flex;
  flex-wrap: in-line;




  // border-radius: 30px;
  // inner-border-radius
  // border: 9px solid skyblue;




  white-space: nowrap;
  padding: 90000;
  
  `;






