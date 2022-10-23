import React, { Fragment, useState } from "react";

const EditUser = ({ user }) => {
  const [user_name, setUser_name] = useState(user.description);

  //edit description function

  const updateUser_name = async e => {
    e.preventDefault();
    try {
      const body = { user_name };
      const response = await fetch(
        `http://localhost:5000/users/${user.user_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${user.user_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${user.user_id}`}
        onClick={() => setUser_name(user.user_name)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit user</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setUser_name(user.user_name)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={user_name}
                onChange={e => setUser_name(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateUser_name(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setUser_name(user.user_name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUser;
