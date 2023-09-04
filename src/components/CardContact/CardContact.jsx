import React, { useState, useEffect } from "react";

import useAppContext from "../../context/AppContext.jsx";

const CardContact = (props) => {
  const ctx = useAppContext();
  function handleClickEdit(props) {
    getContact(
      props.id,
      props.full_name,
      props.email,
      props.address,
      props.phone
    );
    props.onEdit();
  }
  return (
    <>
      <li className="list-group-item">
        <div className="row w-100">
          <div className="col-12 col-sm-6 col-md-3 px-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle shadow-4-strong m-3"
              alt="avatar"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
            <div className=" float-right">
              <button className="btn" onClick={() => handleClickEdit(props)}>
                <i className="fas fa-pencil-alt mr-3" />
              </button>
              <button className="btn">
                <i className="fas fa-trash-alt" />
              </button>
            </div>
            <label className="name">{props.full_name}</label>
            <br />
            <i className="fas fa-map-marker-alt text-muted mr-3" />
            <span className="text-muted">{props.address}</span>
            <br />
            <span
              className="fa fa-phone fa-fw text-muted mr-3"
              data-toggle="tooltip"
              title=""
              data-original-title="(870) 288-4149"
            />
            <span className="text-muted small">{props.phone}</span>
            <br />
            <span
              className="fa fa-envelope fa-fw text-muted mr-3"
              data-toggle="tooltip"
              data-original-title=""
              title=""
            />
            <span className="text-muted small text-truncate">
              {props.email}
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardContact;
