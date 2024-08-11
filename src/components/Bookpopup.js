import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import toast, {Toaster} from "react-hot-toast"

import classes from "./bookpopup.module.css";

const Bookpopup = props => {
    const today = new Date()
    const minimumDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate() + 1).padStart(2, '0')}`

    const [disabled, setDisabled] = useState(false)

    // Initializing the register, handleSubmit function and errors object to controke the form 
    const {register, handleSubmit} = useForm()

    const formHandler = data => {
        setDisabled(true)
        fetch("https://formspree.io/f/mkgwbbao", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if(res.ok){
                toast.success("Sent")
                setTimeout(() => {
                    props.hide()
                }, 2000)
            }else{
                toast.error("Somthing went wrong please try again")
            }
            setDisabled(false)
        })
    }

    return(
        <Fragment>
        <Toaster position="top-center" reverseOrder={false}/>
        <div onClick={props.hide} className={classes.backdrop}></div>
        <section className={classes.book}>
            <header className={classes.book__header}>
                <h3>{props.type}</h3>
            </header>

            <form onSubmit={handleSubmit(formHandler)} className={classes.book__form}>
                <section>
                    <div>
                        <label>Name</label>
                        <input type="text" {...register("name")}/>
                    </div>
                    <div>
                        <label>Number Of Poeple</label>
                        <input type="number" {...register("numberOfPoeple")} min={(props.type == "Home Party Platters" || props.type == "Private Dining Experiences") ? 6 : 10}/>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type="date" {...register("date")} min={`${minimumDate}`}/>
                    </div>
                </section>
                
                <section className={classes.choices}>
                    <div>
                        <input type="checkbox" {...register("vegetarian")}/>
                        <label>Vegetarian</label>
                    </div>
                    <div>
                        <input type="checkbox" {...register("vegan")}/>
                        <label>Vegan</label>
                    </div>
                    <div>
                        <input type="checkbox" {...register("omnivore")}/>
                        <label>Omnivore</label>
                    </div>
                </section>

                <label>Allergies</label>
                <textarea {...register("allergies")} rows="5"></textarea>

                <label>Additional Comments</label>
                <textarea {...register("comments")} rows="5"></textarea>
            
                <footer className={classes.book__form__footer}>
                    <Button secondary  onClick={props.hide}>cancel</Button>
                    <Button secondary type="submit" disabled={disabled}>send</Button>
                </footer>
            </form>

        </section>
    </Fragment>
    )
}

export default Bookpopup;