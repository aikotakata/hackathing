import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faCircle } from '@fortawesome/free-solid-svg-icons'
//import { Modal } from 'bootstrap';
//import Modal from './Modal.js';
//import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal'
import { useEffect, useState } from "react";
import { Button} from 'react-bootstrap';

function PopUp(contact, email){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Contact: {contact} /n Email: {email} </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};


export default class JobTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortKey: 'hourly',
            sortOrder: 'asc',
            show_yes: false,
        }
        this.jobsMaster = require('./jobs.json');
        this.jobsFiltered = this.jobsMaster;
        
    }

    
    componentDidMount() {
        this.filterJobs();
    }
    
    filterJobs(){
        this.jobsFiltered = this.jobsMaster;

        this.jobsFiltered.sort((job1, job2)=>{
            let a = job1;
            let b = job2;

            if(this.state.sortOrder==='asc'){
                a = job2;
                b = job1;
            }

            console.log(typeof a[this.state.sortKey]);
            

            if (typeof a[this.state.sortKey] == "number") {
                return a[this.state.sortKey] - b[this.state.sortKey];
            } else {
                return ((a[this.state.sortKey] < b[this.state.sortKey]) ? -1 : ((a[this.state.sortKey] > b[this.state.sortKey]) ? 1 : 0));
            }
        });
    }


    toggleOrder(key){
        this.setState({
            sortOrder: this.state.sortOrder==='desc' ? 'asc':'desc',
            sortKey: key
        }, 
        ()=>{
            this.filterJobs();
            console.log(`filtered ${this.state.sortKey} ${this.state.sortOrder}`);
        });
        
    }




    render() {
 
        return(
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th onClick={()=>{this.toggleOrder('name');}}>Name <FontAwesomeIcon size="md" icon={this.state.sortKey==='name'? this.state.sortOrder==='asc'? faArrowDown: faArrowUp : faCircle}/> </th>
                        <th>Description</th>
                        <th onClick={()=>{this.toggleOrder('hourly');}}>Pay (hourly) <FontAwesomeIcon icon={this.state.sortKey==='hourly'? this.state.sortOrder==='asc'? faArrowDown: faArrowUp : faCircle}/></th>
                        <th onClick={()=>{this.toggleOrder('date');}}>Date Posted <FontAwesomeIcon icon={this.state.sortKey==='date'? this.state.sortOrder==='asc'? faArrowDown: faArrowUp : faCircle}/></th>
                    </tr>
                </thead>
                <tbody>
                    {this.jobsFiltered.map((job, i)=>{
                    return(
                        <tr key={i}>
                            <td onClick={()=>{PopUp(job.contact, job.email);}}>{job.name}</td>
                            <td>{job.description}</td>
                            <td>${job.hourly}</td>
                            <td>{job.date}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </Table>
        );
    }
}