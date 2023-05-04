import React, { useState } from 'react';
import './Home.css';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCards] = useState([
    {
      title: 'LOGIN',
      description: (
        <div><ul>
          <li className='header-li-text'>Already have account?</li>
          <li><a href="/login">Login</a></li>
        </ul></div>
      )
    },
    {
      title: 'ADD USER',
      description: 'Add a new user to the system. You will be prompted to enter the user’s name, email address, and other relevant information.'
    },
    {
      title: 'DELETE USER',
      description: 'Delete a user from the system. Select the user you wish to delete from the list, then click “Delete”.'
    },
    {
      title: 'UPDATE USER',
      description: 'Update an existing user’s information. Select the user you wish to update from the list, then click “Edit”. You will be able to modify the user’s name, email address, and other relevant information.'
    },
    {
      title: 'SORT USERS',
      description: 'Sort the list of users by name and email address. Choose the “Sort By” button options, then the users will be automatically be sorted.'
    }
  ]);

  return (
    <div className="Container">
      <div className="CardsContainer">
        <div className="Cards">
          {cards.map((card, index) => (
            <div key={index} className="Card">
              <h2 className="CardTitle">{card.title}</h2>
              <p className="CardDescription">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
