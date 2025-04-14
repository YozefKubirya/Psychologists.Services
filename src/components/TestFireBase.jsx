import React, { useEffect } from "react";
import { db, ref, get, child } from "../firebase/firebase.js";

export const TestFirebase = () => {
  useEffect(() => {
    const dbRef = ref(db);

    get(child(dbRef, `/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("Дані психологів:", snapshot.val());
        } else {
          console.log("Немає даних");
        }
      })
      .catch((error) => {
        console.error("Помилка при отриманні даних:", error);
      });
  }, []);

  return <div>Перевірка Firebase (дивись консоль)</div>;
};
