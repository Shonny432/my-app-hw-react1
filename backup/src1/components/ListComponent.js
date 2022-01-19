/* Вам необходимо вывести его нумерованным списком, каждый элемент списка должен иметь формат

firstName: John, lastName: Doe, fullName: John Doe, age: 24, job: Developer
FullName нужно получить сложив имя и фамилию

К возрасту добавить 5 лет */

import React from "react";

const User = (props) => {
    return (
    <li>
        firstName: {props.user.firstName}, 
        lastName: {props.user.lastName},
        fullName: {props.user.firstName + " " + props.user.lastName},
        age: {props.user.age + 5},
        job: {props.user.job}
    </li>
    );
}

export const ListComponent = () => {
    let users = [
        { id: 1, firstName: "John", lastName: "Doe", age: 24, job: "Developer"},
        { id: 2, firstName: "Kate", lastName: "Reton", age: 22, job: "Chef"},
        { id: 3, firstName: "Melissa", lastName: "Lout", age: 41, job: "Developer"},
        { id: 4, firstName: "Ann", lastName: "Willington", age: 23, job: "Driver"},
        { id: 5, firstName: "Michel", lastName: "Plank", age: 55, job: "Developer"},
        { id: 6, firstName: "Bob", lastName: "Palanski", age: 32, job: "Waiter"},
        { id: 7, firstName: "Jack", lastName: "Daniels", age: 23, job: "Developer"},
        { id: 8, firstName: "Poul", lastName: "Torn", age: 65, job: "Cashier"},
    ];

   
    return (
      <ol>
        {users.map((user) => <User key={user.id} user={user} />)}
      </ol>
    );
    
  }
