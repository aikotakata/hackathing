import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
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



export default class JobTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortKey: 'hourly',
            sortOrder: 'asc',
            modalVisible: false,
            modalJob: {}
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


    toggleOrder = (key) => {
        this.setState({
            sortOrder: this.state.sortOrder==='desc' ? 'asc':'desc',
            sortKey: key
        }, 
        ()=>{
            this.filterJobs();
            console.log(`filtered ${this.state.sortKey} ${this.state.sortOrder}`);
        });
        
    }

    toggleModal = (job={}) => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            modalJob: job
        });
    }




    render() {
        
        return(
            <>
            <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
                <Modal.Header closeButton>
                <Modal.Title>{this.state.modalJob.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>
                        {this.state.modalJob.description}
                    </h5>
                    <p>
                        Contact: {this.state.modalJob.contact}
                    </p>
                    <p>
                        Email: {this.state.modalJob.email}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.toggleModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th onClick={()=>{this.toggleOrder('name');}}>Name <FontAwesomeIcon size="md" icon={this.state.sortKey==='name'? this.state.sortOrder==='asc'? faArrowDown: faArrowUp : faGripLinesVertical}/> </th>
                        <th>Description</th>
                        <th onClick={()=>{this.toggleOrder('hourly');}}>Pay (hourly) <FontAwesomeIcon icon={this.state.sortKey==='hourly'? this.state.sortOrder==='asc'? faArrowDown: faArrowUp : faGripLinesVertical}/></th>
                        <th onClick={()=>{this.toggleOrder('date');}}>Date Posted <FontAwesomeIcon icon={this.state.sortKey==='date'? this.state.sortOrder==='asc'? faArrowDown: faArrowUp : faGripLinesVertical}/></th>
                    </tr>
                </thead>
                <tbody>
                    {this.jobsFiltered.map((job, i)=>{
                    return(
                        <tr key={i} onClick={()=>{this.toggleModal(job)}}>
                            <td>{job.name}</td>
                            <td>{job.description}</td>
                            <td>${job.hourly}</td>
                            <td>{job.date}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </Table>
            </>
        );
    }
}