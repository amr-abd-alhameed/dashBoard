import React from "react";import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider";
// import { ContextProvider } from './contexts/ContextProvider';
// Registering Syncfusion license key
registerLicense(
  "Mgo+DSMBaFt+QHJqVk1nQ1BDaV1CX2BZeVl1R2lceE4BCV5EYF5SRHBeRV1kSnxWfkNiWXc=;Mgo+DSMBPh8sVXJ1S0R+X1pDaV5FQmFJfFBmQmlafVR1c0U3HVdTRHRcQltiTn5UdUdmUXlcdnw=;ORg4AjUWIQA/Gnt2VFhiQlJPcUBDWnxLflF1VWRTfFx6cVJWESFaRnZdQV1lSHlTcUZhXHdYdHdd;MjQ0NjUzMUAzMjMxMmUzMDJlMzBLejVQQmV5Y1JmODZTSTlOK0IrSk8rQzFWeDNMaE1ncTE0NTdZaWNwSEhFPQ==;MjQ0NjUzMkAzMjMxMmUzMDJlMzBOeVZxdHpHeWZoa2s4Ujg1d2dObzk1T1JtbGt5M1FlVVFreG9ZT0FrRnAwPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVhdXGRWfFN0RnNedV1yflBBcC0sT3RfQF5jT39UdkJgW3pWd3RdTg==;MjQ0NjUzNEAzMjMxMmUzMDJlMzBRNGVDbHhnVm0rcEZadThENUZBcXVFeFpzOWc3N1p6bG05aGlrbnR1VDBvPQ==;MjQ0NjUzNUAzMjMxMmUzMDJlMzBNUGJ4QzZzNERYQUNFTTBCYndBQlhCK00yQWQ0Y045SDI4cFBtcm8zbElNPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcUBDWnxLflF1VWRTfFx6cVJWESFaRnZdQV1lSHlTcUZhXHdZeHNd;MjQ0NjUzN0AzMjMxMmUzMDJlMzBsYkhjMkhsWmVWMnZIWUlLbGppNUZCMFJlTWtFL2R2MEJKSk1GcktrZ1Q4PQ==;MjQ0NjUzOEAzMjMxMmUzMDJlMzBIcHZodkFFeGthL25UZ3h3S3NNWUQ2MG9haVRYY1hVQkxJaTJoOVdzUFNBPQ==;MjQ0NjUzOUAzMjMxMmUzMDJlMzBRNGVDbHhnVm0rcEZadThENUZBcXVFeFpzOWc3N1p6bG05aGlrbnR1VDBvPQ=="
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  // </React.StrictMode>
);
