import React from 'react'
import "./cal.css"
import Calcbar from '../../components/calcbar/Calcbar'
import Form1 from "../../components/form1/Form1"
import Form2 from "../../components/form2/Form2"
import Form3 from "../../components/form3/Form3"


function CalPage() {
    return (
        <div className="calpage">
            <Calcbar />
            <Form1 />
            <Form2 />
            <Form3 />
        </div>
    )
}

export default CalPage
