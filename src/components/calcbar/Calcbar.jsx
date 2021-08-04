import React, {useState} from 'react'
import './calcbar.css'
import {AiOutlineMenuUnfold} from "react-icons/ai"
import {CgCommunity} from "react-icons/cg"
import {GrUserWorker} from "react-icons/gr"
import {FcDepartment} from "react-icons/fc"
import { StateConsumer } from "../../context";
import { Link } from "react-router-dom";


function Calcbar() {
    const [bar, setBar] = useState(false)
    const showSidebar = ()=> setBar(!bar)
    return (
        <div className="calbar">
            <div className="topbar" >
                <div className="topbar_head" onClick={showSidebar}>
                    <AiOutlineMenuUnfold className="menu"/>
                    <p>Select Category</p>
                </div>
                <button><Link className="link" to="/">back</Link></button>
            </div>
            {bar?(<ul className="bar_list">
                <StateConsumer>
                    {value=>{
                        const {
                            displayForm1,
                            displayForm2,
                            displayForm3,
                        } = value
                        return (
                            <>
                                <li onClick={()=>{
                                    displayForm1()
                                    showSidebar()
                                    }}><CgCommunity className="icon" /><span >students</span></li>
                                <li onClick={()=>{
                                    displayForm2()
                                    showSidebar()
                                    }}><FcDepartment className="icon" /><span>lectures</span></li>
                                <li onClick={()=>{
                                    displayForm3()
                                    showSidebar()
                                    }}><GrUserWorker color="green" className="icon" /><span>FUTO businnes community</span></li>
                            </>
                        )
                    }}
                </StateConsumer>
            </ul>):null}
        </div>
    )
}

export default Calcbar
