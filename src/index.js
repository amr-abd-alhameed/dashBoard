import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider";
// import { ContextProvider } from './contexts/ContextProvider';
// Registering Syncfusion license key
registerLicense(
  "Mgo+DSMBaFt+QHJqVk1mQ1NbdF9AXnNIfllyRWldf04BCV5EYF5SRHNfQVxrSHtTcEJiXX0=;Mgo+DSMBPh8sVXJ1S0R+X1pCaV1dX2NLfUN3RWldf1R0dEU3HVdTRHRcQlhjSn9bd0BjX3hcd3Y=;ORg4AjUWIQA/Gnt2VFhiQlJPcEBAQmFJfFBmRGNTe156cFVWESFaRnZdQV1mSX1SfkRmWXlZc31X;MTkxMjkyOEAzMjMxMmUzMjJlMzNaUUdwcStEMWdIMGhSN2w0OExlWnFXc0R3V2hsditSL1dnVnZzRjVSR0RZPQ==;MTkxMjkyOUAzMjMxMmUzMjJlMzNCdnZLbE4rSlpUOEUrMHhwKzQxTnFmbkU1UnI0amhYUk5kQ2VKd1RiVkRFPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldX3xLflF1VWJZdVpwflFGcC0sT3RfQF5jTH5Qd01iXH9Yd31WRA==;MTkxMjkzMUAzMjMxMmUzMjJlMzNZc0RsRXlRRTBGQ3BXQjV3VE8yU2hCSm1xZnhrQ2FQQ0FtdjBUbEQ3YzZvPQ==;MTkxMjkzMkAzMjMxMmUzMjJlMzNUQXJVNnM0WmxnMGZYbi9uZk1QdUZ4Y1ZyQ1hsSUVhK1pYMEdQdktpYjlnPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcEBAQmFJfFBmRGNTe156cFVWESFaRnZdQV1mSX1SfkRmWXlWdHFU;MTkxMjkzNEAzMjMxMmUzMjJlMzNHa1F0VDdWK2xCWlZYcGV0aXh2T1grVFEwcnNYckxWUTJxMmk4bC9aMG5NPQ==;MTkxMjkzNUAzMjMxMmUzMjJlMzNUK2xEZG9BaEJpSUVEUEdobFJoODBQQTZaaGx0SDQ1Sm5rN1Ywa2RZaVZRPQ==;MTkxMjkzNkAzMjMxMmUzMjJlMzNZc0RsRXlRRTBGQ3BXQjV3VE8yU2hCSm1xZnhrQ2FQQ0FtdjBUbEQ3YzZvPQ=="
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  // </React.StrictMode>
);
