import React,{useState,useEffect} from "react"
import ContactsForm from "./ContactForm"
import firebaseDB from "../firebase"

export default function Contacts(){
    const addOrEdit=obj=>{
        firebaseDB.child('contacts').push(obj,
            err=>{
                if(err){
                    console.log('error')
                }
            })
    }

    const [contactObjects,setContactObjects]=useState({})
    const [currentId,setCurrentId]=useState('')
    useEffect(()=>{
        firebaseDB.child('contacts').on('value',snapshot=>{
            if(snapshot.val()!=null){
                setContactObjects({
                    ...snapshot.val()
                })
            }
        })
    },[])
    return(
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactsForm addOrEdit={addOrEdit}/>
                </div>
                <div className="col-md-7">
                    <div>
                        <table className="table table-borderless table-stripped">
                            <thead className="thead-light">
                                <tr>
                                    <th>Full Name</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(contactObjects).map(id=>{
                                        return <tr key={id}>
                                            <td>{contactObjects[id].fullName}</td>
                                            <td>{contactObjects[id].mobile}</td>
                                            <td>{contactObjects[id].email}</td>
                                            <td>
                                                <a className="btn text-primary" onClick={()=>{setCurrentId(id)}}>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </a>
                                                <a className="btn text-danger">
                                                    <i className="fas fa-trash-alt"></i>
                                                </a>
                                            </td>         
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}