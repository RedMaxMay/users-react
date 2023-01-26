import React from "react";
import s from "./style.module.css";

export default function User({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  deleteUser,
}) {
  return (
    <div className={s.usercard}>
      <h3>User information:</h3>

      <div className={[s.wrap, s.userinfo].join(" ")}>
        <p>
          <span className={s.feature}>Name:</span> {name}
        </p>
        <p>
          <span className={s.feature}>Username:</span> {username}
        </p>
      </div>

      <h3>Contact information:</h3>

      <div className={s.wrap}>
        <a href={`mailto:${email}`}>
          <span className={s.feature}>Email:</span> {email}
        </a>
        <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
          <span className={s.feature}>Phone:</span> {phone}
        </a>
        <a href="#">
          <span className={s.feature}>Website:</span> {website}
        </a>
      </div>

      <h3>Address information:</h3>

      <div className={s.wrap}>
        <p>
          <span className={s.feature}>Street:</span> {address.street}
        </p>
        <p>
          <span className={s.feature}>Suite:</span> {address.suite}
        </p>
        <p>
          <span className={s.feature}>City:</span> {address.city}
        </p>
        <p>
          <span className={s.feature}>zipcode:</span> {address.zipcode}
        </p>
      </div>

      <button className={s.btn} onClick={() => deleteUser(id)}>
        Delete
      </button>
    </div>
  );
}
