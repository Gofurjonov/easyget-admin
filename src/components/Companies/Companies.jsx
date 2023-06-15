import React from 'react';
import { Table } from 'reactstrap';
import Input from '../Input/Input';
import search from "../../assets/images/search-grey.svg"

const Companies = () => {
    const user = [
        {  name: "Company name", id: 2 },
        {  name: "Company name", id: 2 },
        {  name: "Company name", id: 2 },
        {  name: "Company name", id: 2 },
        
      ];
    return (
        <div>
            <div className="containerbox">
        <div className="containerbox__title">
          <div>
            <h1 className="containerbox__title__name">Companies</h1>
          </div>
          <div>
          <Input icon={search} placeholder='Search by name, id...' className="tableInput"/>
          </div>
        </div>
        <Table bordered>
  <thead>
    <tr>
      <th>
        User name
      </th>
      <th>
        User id
      </th>
    </tr>
  </thead>
  <tbody>
    {
      user.map((user, id)=>(
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{++id}</td>  
        </tr>
      ))
    }
  </tbody>
</Table>
      </div>
        </div>
    );
}

export default Companies;
