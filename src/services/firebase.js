import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvgw4gPAhU8ysdL2H31n8_eIewNe_ZyT8",
  authDomain: "tcc-action.firebaseapp.com",
  databaseURL: "https://tcc-action-default-rtdb.firebaseio.com",
  projectId: "tcc-action",
  storageBucket: "tcc-action.appspot.com",
  messagingSenderId: "507875655067",
  appId: "1:507875655067:web:d00a91125ee49a9df9b53e"
};

export const app = initializeApp(firebaseConfig);