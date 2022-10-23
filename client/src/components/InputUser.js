import React, { Fragment, useState } from "react";

const InputUser = () => {
  const [user_name, setUser_name] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { user_name };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern User List</h1>
      <p className="text-center mt-1">by Vinícius</p>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={user_name}
          onChange={e => setUser_name(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputUser;
