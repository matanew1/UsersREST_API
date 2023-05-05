import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-container">
      <h1>About My User Management Application</h1>
      <p1>
        Our user management application is designed to help you stay organized
        and productive by keeping track of all your users in one place. Whether
        you're a small business owner or part of a large organization, our app
        makes it easy to manage your users and keep everything in order.
      </p1>
      <br />
      <h2>Features:</h2>
      <ul>
        <li>Create, edit, and delete users:</li>
        <p1>
          With our app, you can easily create new users, edit their details, and
          delete them if necessary. This makes it easy to keep track of who has
          access to your system and ensure that only authorized individuals can
          log in.
        </p1>
        <li>Sort users by email and name:</li>
        <p1>
          You can sort your users alphabetically by email or name, making it
          easy to find the user you're looking for quickly. This is especially
          useful if you have a large number of users and need to find a specific
          person quickly.
        </p1>
      </ul>
      <br />
      <h2>Version History:</h2>
      <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>Date</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.0.0</td>
            <td>May 2, 2023</td>
            <td>Basic user creation, update and deletion</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AboutPage;
