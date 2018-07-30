import React from "react";

const UsersSingle = ({ item }) => {
  return (
    <div className="list-group-item">
      <h5 className="mb-0">{item.name}</h5>
      <span className="text-muted font-weight-light d-block">{item.email}</span>
      <span className="text-muted font-weight-light">
        {item.address.street}, {item.address.suite}, {item.address.city}
      </span>
    </div>
  );
};

export default UsersSingle;
