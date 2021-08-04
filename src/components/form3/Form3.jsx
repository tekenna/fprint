import React,{useState} from 'react'
import "./form3.css"
import { StateConsumer } from "../../context";
import axios from "axios"
import Result from "../Results/Result3"
 

function Form3() {
    const [formDetails, setFormDetails] = useState({
        name: "",
        department: "",
        school: "",
        level: 0,
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
            const res = await axios.post("/fbc", {
                name: formDetails.name,
                residence: formDetails.residence,
                businessName: formDetails.businessName,
                businessLocation: formDetails.businessLocation,
                transportation: formDetails.transportation,
                diet: formDetails.diet,
                mealPlan: formDetails.mealPlan,
                softDrinks: formDetails.softDrinks,
                alcohol: formDetails.alcohol,
                power: formDetails.power,
                powerRating: formDetails.powerRating,
                liters: formDetails.liters,
                waste: formDetails.waste,
                paper: formDetails.paper,
            })
            console.log(res)
            
        }catch(err){
            console.log(err)
        }
    }
    return (
        <StateConsumer>
            {value=>{
                const {state} = value.form3
                const {result, openResult} = value
                if (state === true){
                    return(
                        <>
                        <div className="form_heading">
                            <h1>FUTO BUSINESS COMMUNITY</h1>
                            <small className="note"><i>(NOTE: all the data provided are strictly for research purposes and all of the provided information will remain confidential)</i></small>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form_user">
                                <div className="field">
                                <label className="user_label">Name:</label>
                                <input 
                                    onChange={e=>setFormDetails({...formDetails, name: e.target.value})}  type="text"
                                    className="user_input"
                                    required 
                                />
                                </div>
                                <div className="field">
                                    <label className="user_label">Place of residence:</label>
                                    <select name="residence" id="residence" 
                                    onChange={e=>setFormDetails({...formDetails, residence: e.target.value
                                        })} required>
                                        <option ></option>
                                        <option value="eziobodo">Eziobodo</option>
                                        <option value="ihiagwa">Ihiagwa</option>
                                        <option value="umuchima">Umuchima</option>
                                        <option value="obinze">Obinze</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label className="user_label">Business Name:</label>
                                    <input className="user_input"
                                        type="text"
                                        onChange={e=>setFormDetails({...formDetails, businessName: e.target.value
                                        })}
                                    />
                                </div>
                                <div className="field">
                                    <label className="user_label">Business Location:</label>
                                    <input className="user_input" type="text"
                                        onChange={e=>setFormDetails({...formDetails, businessLocation: e.target.value
                                        })}
                                    />
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
                                            <option value="motor cycle"
                                            >Motor Cycle</option>
                                            <option value="bus">Bus</option>
                                            <option value="car">Car</option>
                                        </select>
                                    </li>
                                    <li className="form_q">
                                        <label>How best will you describe your diet? </label>
                                        <select name="diet" id="diet" onChange={e=>setFormDetails({...formDetails, diet: e.target.value
                                            })} required>
                                            <option ></option>
                                            <option value="vegetarian"
                                            >Vegetarian</option>
                                            <option value="omnivore" >Omnivore</option>
                                            <option value="Extreme meat eater" >Extreme meat eater</option>
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
                                    <label>On a weekly basis, how many cans of soft drinks do you take while at your work place?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, softDrinks: e.target.value
                                    })} />
                                </li>
                                <li className="form_q">
                                    <label>On a weekly basis, how many bottles of alcohol do you take while at your work place?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, alcohol: e.target.value
                                            })} />
                                </li>
                                <li className="form_q">
                                    <label>What is the source of electricity for your business?</label>
                                    <select name="mealPlan" id="mealPlan" onChange={e=>setFormDetails({...formDetails, power: e.target.value
                                        })} required>
                                        <option ></option>
                                        <option value="genrator"
                                        >genrator</option>
                                        <option value="wind energy">wind energy</option>
                                        <option value="solar energy">solar energy</option>
                                    </select>
                                </li>
                                <li className="form_q">
                                    <label>Whats the capacity of your electrical power supply (ie power rating)</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, powerRating: e.target.value
                                            })}/><small>kVA</small>
                                </li>
                                <li className="form_q">
                                    <label>How many liters of petrol / diesel do you use daily?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, liters: e.target.value})} />
                                </li>
                                <li className="form_q">
                                    <label>How many times is your general waste disposed  weekly</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, waste: e.target.value
                                            })} />
                                </li>
                                <li className="form_q">
                                    <label>How many reams of paper do you use daily?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, paper: e.target.value
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
                                lt = {formDetails.liters}
                                trans = {formDetails.transportation}
                                diet = {formDetails.diet}
                                mP = {formDetails.mealPlan}
                                sD = {formDetails.softDrinks}
                                alc = {formDetails.alcohol}
                                paper = {formDetails.paper}
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

export default Form3
