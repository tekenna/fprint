import React,{useState} from 'react'
import "./form1.css"
import { StateConsumer } from "../../context";
import axios from "axios"
import Result from "../Results/Result1"
 

function Form1() {
    const [formDetails, setFormDetails] = useState({
        name: "",
        department: "",
        school: "",
        level: "",
        residence: "",
        transportation: "",
        diet: "",
        mealPlan:"",
        softDrinks: 0,
        alcohol: 0,
        books: 0,
        textBooks: 0,
        clothes: 0,
        powerRating: 0,
        liters: 0,
        genRunTime: 0
    })
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("https://cfprint.herokuapp.com/students/", {
                name: formDetails.name,
                department: formDetails.department,
                school: formDetails.school,
                level: formDetails.level,
                residence: formDetails.residence,
                transportation: formDetails.transportation,
                diet: formDetails.diet,
                mealPlan: formDetails.mealPlan,
                softDrinks: formDetails.softDrinks,
                alcohol: formDetails.alcohol,
                books: formDetails.books,
                textBooks: formDetails.textBooks,
                clothes: formDetails.clothes,
                powerRating: formDetails.powerRating,
                liters: formDetails.liters,
                genRunTime: formDetails.genRunTime
            })
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <StateConsumer>
            {value=>{
                const {state} = value.form1
                const {result, openResult} = value
                if (state === true){
                    return(
                        <>
                        <div className="form_heading">
                            <h1>FUTO STUDENTS</h1>
                            <small className="note"><i>(NOTE: all the data provided are strictly for research purposes and all of the provided information will remain confidential)</i></small>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form_user">
                                <div className="field">
                                    <label className="user_label">Name:</label>
                                    <input className="user_input"  type="text" onChange={e=>setFormDetails({...formDetails, name: e.target.value})}
                                         />
                                </div>
                                <div className="field">
                                    <label className="user_label">Department:</label>
                                    <input className="user_input" type="text" onChange={e=>setFormDetails({...formDetails, department: e.target.value})}
                                      />
                                </div>
                                <div className="field">
                                    <label className="user_label">School:</label>
                                    <input className="user_input" type="text" onChange={e=>setFormDetails({...formDetails, school: e.target.value})}
                                    />
                                </div>
                                <div className="double_field">
                                    <div className="field_d">
                                        <label className="user_label">Level:</label>
                                        <select className="user_select
                                        " name="level" id="level" 
                                        onChange={e=>setFormDetails({...formDetails, level: e.target.value
                                            })} >
                                            <option ></option>
                                            <option value="100">100</option>
                                            <option value="200">200</option>
                                            <option value="300">300</option>
                                            <option value="400">400</option>
                                            <option value="500">500</option>
                                            <option value="Jupeb">Jupeb</option>
                                            <option value="pre degree">pre degree</option>
                                            <option value="post graduate">post graduate</option>
                                        </select>
                                    </div>

                                    <div className="field_d">
                                        <label className="user_label">Place residence:</label>
                                        <select className="user_select
                                        " name="residence" id="residence" 
                                        onChange={e=>setFormDetails({...formDetails, residence: e.target.value
                                            })} required>
                                            <option ></option>
                                            <option value="hostel" >Hostel</option>
                                            <option value="eziobodo">Eziobodo</option>
                                            <option value="ihiagwa">Ihiagwa</option>
                                            <option value="umuchima">Umuchima</option>
                                            <option value="obinze">Obinze</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <ol className="ol">
                                <small className="note note_q "><i>(please, kindly answer the following questions)</i></small>
                                <div className="form_list">     
                                    <li className="form_q">
                                        <label>What is your daily  means of transportation to your work place?</label>
                                        <select name="transportation" id="transportation" onChange={e=>setFormDetails({...formDetails, transportation: e.target.value
                                            })} required>
                                            <option ></option>
                                            <option value="trekking">Trekking</option>
                                            <option value="bisycle">Bisycle</option>
                                            <option value="motor cycle">Motor Cycle</option>
                                            <option value="bus">Bus</option>
                                            <option value="car">Car</option>
                                        </select>
                                    </li>
                                    <li className="form_q">
                                        <label>How best will you describe your diet? </label>
                                    
                                        <select name="diet" id="diet" onChange={e=>setFormDetails({...formDetails, diet: e.target.value
                                        })} required>
                                            <option ></option>
                                            <option value="vegetarian">Vegetarian</option>
                                            <option value="omnivore">Omnivore</option>
                                            <option value="Extreme meat eater">Extreme meat eater</option>
                                        </select>
                                    
                                    </li>
                                    <li className="form_q">
                                        <label>What is your daily meal plan while in your work place?</label>
                                        <select name="mealPlan" id="mealPlan" onChange={e=>setFormDetails({...formDetails, mealPlan: e.target.value
                                            })} required>
                                            <option ></option>
                                            <option value="once daily"
                                            >Once daily</option>
                                            <option value="twice daily">Twice daily</option>
                                            <option value="thrice daily">Thrice daily</option>
                                        </select>
                                    </li>
                                    <li className="form_q">
                                        <label>How many times do you take soft drinks in a week?</label>
                                        <input type="number" onChange={e=>setFormDetails({...formDetails, softDrinks: e.target.value
                                                })} required />
                                    </li>
                                    <li className="form_q">
                                        <label>How many bottles of alchohol do you take in a week?</label>
                                        <input type="number" onChange={e=>setFormDetails({...formDetails, alcohol: e.target.value
                                                })} required/>
                                    </li>
                                    <li className="form_q">
                                        <label>How many exercise books do you make use of per semester?</label>
                                        <input type="number" onChange={e=>setFormDetails({...formDetails, books: e.target.value
                                        })} required/>
                                    </li>
                                    <li className="form_q">
                                        <label>How many textbooks  do you use per semester?</label>
                                        <input type="number" onChange={e=>setFormDetails({...formDetails, textBooks: e.target.value
                                        })} />
                                    </li>
                                    <li className="form_q">
                                        <label>An average of how many clothes do you buy/sew per semester? </label>
                                        <input type="number"onChange={e=>setFormDetails({...formDetails, clothes: e.target.value
                                        })}  required/>
                                    </li>
                                    
                                    <li className="form_q">
                                        <label>What is the model / power rating of your hostel generator</label>
                                        <input type="number" onChange={e=>setFormDetails({...formDetails, powerRating: e.target.value
                                                })}/>
                                    </li>
                                    <li className="form_q">
                                        <label>How many liters of petrol / diesel do you use daily?</label>
                                        <input type="number" onChange={e=>setFormDetails({...formDetails, liters: e.target.value
                                        })} required />
                                    </li>
                                    <li className="form_q">
                                        <label>What is the run time of the generator?</label>
                                        <input type="number" onChange={e=>setFormDetails({...formDetails, genRunTime: e.target.value
                                                })} />
                                    </li>
                                </div> 
                            </ol>
                            <button className="btn">Submit</button>
                        </form>
                        <div className="btm_container">
                            <button className="btn btn_r" onClick={()=>openResult()}>Show result</button>
                        </div>
                        {result === true && formDetails.residence !== ""? <Result res={formDetails.residence}
                                books = {formDetails.books}
                                trans = {formDetails.transportation}
                                diet = {formDetails.diet}
                                mP = {formDetails.mealPlan}
                                sD = {formDetails.softDrinks}
                                alc = {formDetails.alcohol}
                                text = {formDetails.textBooks}
                                clt = {formDetails.clothes}
                                lt = {formDetails.liters}
                            />: null}
                        </>
                    )
                } else{
                    return null
                }
            }}
        </StateConsumer>
    )
}

export default Form1
