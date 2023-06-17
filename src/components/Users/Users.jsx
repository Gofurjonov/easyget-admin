import React from "react";
import { useState, useEffect } from "react";
import { Table } from 'reactstrap';
import Input from "../Input/Input";
import search from "../../assets/images/search-grey.svg"
const Users = () => {
  // const [users, setUsers] = useState([]);
  const user = [
    { id: 1, name: "Abdulrashid Abdilaxmedov", number: +998908234923, coordinate: "12394325454:534392:244353qa:2453", count: "12 orders", order:"23.01.202315:35" },
    { id: 2, name: "Olimjonov Jasur", number: +998908234923, coordinate: "12394325454:534392:244353qa:2453", count: "12 orders", order:"23.01.202315:35" },
    { id: 3, name: "Umarov Jahon", number: +998908234923, coordinate: "12394325454:534392:244353qa:2453", count: "12 orders", order:"23.01.202315:35" }, { id: 1, name: "Abdulrashid Abdilaxmedov", number: +998908234923, coordinate: "12394325454:534392:244353qa:2453", count: "12 orders", order:"23.01.202315:35" },
    { id: 4, name: "Jalilov Tohir", number: +998908234923, coordinate: "12394325454:534392:244353qa:2453", count: "12 orders", order:"23.01.202315:35" }, { id: 1, name: "Abdulrashid Abdilaxmedov", number: +998908234923, coordinate: "12394325454:534392:244353qa:2453", count: "12 orders", order:"23.01.202315:35" },
    { id: 5, name: "Muxtorov Samandar", number: +998908234923, coordinate: "12394325454:534392:244353qa:2453", count: "12 orders", order:"23.01.202315:35" }, { id: 1, name: "Abdulrashid Abdilaxmedov", number: +998908234923, coordinate: "12394325454:534392:244353qa:2453", count: "12 orders", order:"23.01.202315:35" },
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://your-api-url.com/users");
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div>
      <div className="containerbox">
        <div className="containerbox__title">
          <div>
            <h1 className="containerbox__title__name">Users</h1>
          </div>
          <div>
          <Input icon={search} placeholder='Search by id, phone, name...' className="tableInput"/>
          </div>
        </div>
        <Table bordered>
  <thead>
    <tr>
      <th>
        User id
      </th>
      <th>
        User name
      </th>
      <th>
        Phone number
      </th>
      <th>
       Coordinate
      </th>
      <th>
        Order count
      </th>
      <th>
        Last order
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
          <td>{user.coordinate}</td>
          <td>{user.count}</td>
          <td>{user.order}</td>
        </tr>
      ))
    }
  </tbody>
</Table>
      </div>
    </div>
  );
};

export default Users;
