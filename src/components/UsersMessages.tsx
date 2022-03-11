import React, { useEffect, useState } from "react";

import CardHeader from "react-bootstrap/esm/CardHeader";
import { Card } from "react-bootstrap";

import { getData } from "../actions/actions";
import { Data } from "./types";

const UsersMessages = () => {
  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    getData().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <>
      {data
        ? data.map((user) => {
            return (
              <>
                <Card
                  border="primary"
                  style={{ width: "50%", height: "200px", margin: "auto" }}
                >
                  <Card.Img
                    variant="top"
                    src={`${user.avatar}/100px160`}
                    style={{ width: "20%", display: "flex", margin: "auto" }}
                  />

                  <CardHeader>
                    {user.first_name} {user.last_name}
                  </CardHeader>

                  <Card.Body>{user.message}</Card.Body>
                </Card>
              </>
            );
          })
        : null}
    </>
  );
};

export default UsersMessages;
