import React, { useEffect, useState } from "react";

import { getData } from "../actions/actions";
import { Data } from "./types";

const ChatMessages = () => {
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
              <div style={styles.box}>
                <div style={styles.imgBox}>
                  <div>
                    <img style={styles.img} src={`${user.avatar}`}></img>
                  </div>
                </div>
                <div style={styles.textBox}>
                  <div style={styles.userName}>
                    {user.first_name} {user.last_name}
                  </div>
                  <div style={styles.message}>{user.message}</div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

const styles: {
  box: React.CSSProperties;
  imgBox: React.CSSProperties;
  img: React.CSSProperties;
  textBox: React.CSSProperties;
  userName: React.CSSProperties;
  message: React.CSSProperties;
} = {
  box: {
    width: "90%",
    height: "7%",
    padding: "10px 0",
    margin: "10px auto",
    display: "flex",
    flexDirection: "row",
  },
  imgBox: {
    margin: "auto 15px 0 0px",
    display: "flex",
  },
  img: {
    width: "50px",
    height: "50px",
    border: "1px solid rgb(174, 194, 227)",
    borderRadius: "50%",
  },
  textBox: {
    padding: "1.5%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(174, 194, 227)",
    justifyContent: "flex-start",
    borderRadius: "15px",
  },
  userName: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: "12px",
  },
  message: {
    display: "flex",
    textAlign: "start",
  },
};

export default ChatMessages;
