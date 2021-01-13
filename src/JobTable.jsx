import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faCircle } from '@fortawesome/free-solid-svg-icons'

export default class JobTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortKey: 'hourly',
            sortOrder: 'asc',
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
                        <th onClick={()=>{this.toggleOrder('name');}}>Name <FontAwesomeIcon icon={this.state.sortKey==='name'? this.state.sortOrder==='asc'? faArrowDown: faArrowUp : faCircle}/> </th>
                        <th>Description</th>
                        <th onClick={()=>{this.toggleOrder('hourly');}}>Pay (hourly) <FontAwesomeIcon icon={this.state.sortKey==='hourly'? this.state.sortOrder==='asc'? faArrowDown: faArrowUp : faCircle}/></th>
                    </tr>
                </thead>
                <tbody>
                    {this.jobsFiltered.map((job, i)=>{
                    return(
                        <tr key={i}>
                        <td>{job.name}</td>
                        <td>{job.description}</td>
                        <td>${job.hourly}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </Table>
        );
    }
}