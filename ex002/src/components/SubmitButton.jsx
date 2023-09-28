import styles from './styles/SubmitButton.module.css'
import DefaultInput from './DefaultInput';
import DisplayName from './DisplayName';
import UserList from './UsersList';
import { useState } from 'react'

var informations = {name:null, job:null, workingTime:null}

var registeredUsers = [{name: "Gustavo", job: "Programmer"}]

function SubmitButton(){
    const [initialValue, setInitialValue] = useState("Confirmar") 

    //results values
    const [name, setName] = useState(null)
    const [job, setJob] = useState(null)
    const [workingTime, setWorkingTime] = useState(null)
    
    const confirm = () => {
        if (informations.name !== null && informations.job !== null){
            registeredUsers.push({name: informations.name, job: informations.job})
        }
        setName(informations.name) 
        setJob(informations.job)
        setWorkingTime(informations.workingTime)  
        setInitialValue("Confirmado!")
    }
    const resetState = () => {
        setInitialValue("Confirmar")
    }
    const getData = (e) => {
        //console.log(e.target.id)
        if (e.target.id === "name"){
            informations.name = e.target.value
        }else if (e.target.id === "job"){
            informations.job = e.target.value
        }else if (e.target.id === "working-time"){
            informations.workingTime = e.target.value
        }
    }

    return (
        <>
            <DisplayName 
                name={name || "visitante"} 
                currentJob={job || "trabalhador(a)"}
                workingTime={workingTime || "alguns"}
                />
            <DefaultInput myEvent={getData}/>
            <input type="button" className={styles.confirmButton} id="confirm-button" value={initialValue}
            onClick={confirm}
            onMouseLeave={resetState}/>
            <UserList usersArray={registeredUsers}/>
        </>
    )
}

export default SubmitButton