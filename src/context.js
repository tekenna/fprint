import React, { useState } from "react";

const StateContext = React.createContext();

function StateProvider(props) {
    const [showForms, setShowForms] = useState({
        form1: {
            state: true
        },
        form2: {
            state: false
        },
        form3: {
            state: false
        },
        result: false
    })
    

    const displayForm1 = ()=>{
      setShowForms(()=>{
        return {
          form1: {state: true},
          form2: {state: false},
          form3: {state: false},
        }
      })
    }
    const displayForm2 = ()=>{
      setShowForms(()=>{
        return {
          form1: {state: false},
          form2: {state: true},
          form3: {state: false},
        }
      })
    }
    const displayForm3 = ()=>{
      setShowForms(()=>{
        return {
          form1: {state: false},
          form2: {state: false},
          form3: {state: true},
        }
      })
    }
    
    const openResult = ()=>setShowForms(()=>{
      return{
        ...showForms, result: true
      }
    })
    
    const closeResult = ()=>setShowForms(()=>{
      return{
        ...showForms, result: false
      }
    })
    
    return (
      <StateContext.Provider
        value={{
          ...showForms,
          displayForm1: displayForm1,
          displayForm2: displayForm2,
          displayForm3: displayForm3,
          openResult:openResult,
          closeResult: closeResult,
        }}
      >
        {props.children}
      </StateContext.Provider>
    );
  }

const StateConsumer = StateContext.Consumer;

export { StateProvider, StateConsumer };
