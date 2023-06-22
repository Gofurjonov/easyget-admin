import React from 'react';
import { Table } from 'reactstrap';
import Input from '../Input/Input';
import search from "../../assets/images/search-grey.svg"
import'bootstrap/dist/css/bootstrap.min.css';

const Orders = () => {
    const user = [
        { id: 1, name: "Abdulrashid Abdilaxmedov", number: +998908234923, locatsion: "Мирабад район, Тараса Шевченко 36а", products: "1. Газированный напиток Coca-Cola...", data:"23.01.202315:35", price:"99 999 999 cум" }
                
      ];
    return (
        <div>
          <div className="main-subcategory-window">
          <div className="main-subcategory-window__page containerbox">
        <div className="main-subcategory-window__page__header containerbox__title">
          <div>
            <h1 className="containerbox__title__name">Orders</h1>
          </div>
          <div>
          <Input icon={search} placeholder='Search by id, phone, name...' className="tableInput"/>
          </div>
        </div>
        <Table bordered>
  <thead>
    <tr>
      <th>
        Order id
      </th>
      <th>
        User name
      </th>
      <th>
        User phone number
      </th>
      <th>
        Location
      </th>
      <th>
        Products
      </th>
      <th>
        Date & time
      </th>
      <th>
        Total price
      </th>
    </tr>
  </thead>
  <tbody>
    {
      user.map((user, id)=>(
        <tr key={user.id}>
          <td>{++id}</td>
          <td>{user.name}</td>
          <td>{user.number}</td>
          <td>{user.locatsion}</td>
          <td>{user.products}</td>
          <td>{user.data}</td>
          <td>{user.price}</td>
        </tr>
      ))
    }
  </tbody>
</Table>
      `````</div>
          </div>

            
        </div>
    );
}

export default Orders;
