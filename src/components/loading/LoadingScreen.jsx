import React from "react";
import { FullScreenLoader } from "./style";

function LoadingScreen() {
  return (
    <FullScreenLoader>
      <div class='lds-hourglass'></div>
    </FullScreenLoader>
  );
}

export default LoadingScreen;
