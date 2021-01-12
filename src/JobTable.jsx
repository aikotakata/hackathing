import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';

export default class JobTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortKey: 'price',
            sortOrder: 'desc',
        }
        this.jobs = require('./jobs.json');
    }

    render() {
        return(
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Pay (hourly)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.jobs.map((job)=>{
                    return(
                        <tr>
                        <td>{job.name}</td>
                        <td>{job.desc}</td>
                        <td>${job.hourly}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </Table>
        );
    }
}