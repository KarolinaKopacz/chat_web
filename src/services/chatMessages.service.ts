import firebase from "../firebase/firebase.config";

import { Data } from "../components/types";

const chatMessagesFirebase = firebase.db.collection("chatMessages");

const ChatMessagesDataService = {
  getAll: async () => {
    return chatMessagesFirebase
      .get()
      .then((querySnapshot) => {
        let data: Data[] = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        return data;
      })
      .catch((error) => {
        console.log("ERROR:", error.message);
        return [];
      });
  },

  create: async ({
    first_name,
    last_name,
    avatar,
    message,
    createdAt,
  }: Data) => {
    chatMessagesFirebase
      .add({
        createdAt: createdAt,
        first_name: first_name,
        last_name: last_name,
        avatar: avatar,
        message: message,
      })
      .then((documentReference) => {
        console.log("FIREBASE document reference:", documentReference.id);
      })
      .catch((error) => {
        console.log("ERROR:", error.message);
      });
  },
};
export default ChatMessagesDataService;
