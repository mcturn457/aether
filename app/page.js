import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  class Person {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }

  }


  // fill in the login data to the database

  const newPerson = new Person("Colin", "colin@cboelke.com", "12345678");

  console.log(newPerson);
  return (
    <div>
      <h1>AETHER</h1>

      <h3>Person</h3>


      <p>New Person with name: {newPerson.name}</p>
      <p>New Person with email: {newPerson.email}</p>
      <p>New Person with password: {newPerson.password}</p>

      <ul>
        <li>Test</li>
        <li>Test2</li>
        <li>Test3</li>
      </ul>

    </div>
  )
}
