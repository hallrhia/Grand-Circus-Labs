import { useState } from "react";
import "../css/AdDesigner.css";
import Ad from "./Ad";

function AdDesigner() {
  const [flavor, setFlavor] = useState<string>("");
  const [isLight, setIsLight] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<number>(40);

  return (
    <div id="AdDesign">
      <h2>Ad Designer</h2>
      <Ad flavor={flavor} isLight={isLight} fontSize={fontSize} />
      <h3>What to Support</h3>
      <div className="button-bar">
        {flavor === "Chocolate" ? (
          <button onClick={() => setFlavor("Chocolate")} disabled>Chocolate</button>
        ) : (
          <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
        )}
        {flavor === "Vanilla" ? (
          <button onClick={() => setFlavor("Vanilla")} disabled>Vanilla</button>
        ) : (
          <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
        )}
        {flavor === "Strawberry" ? (
          <button onClick={() => setFlavor("Strawberry")} disabled>Strawberry</button>
        ) : (
          <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
        )}
      </div>

      <h3>Color Theme</h3>
      <div className="button-bar">
   
        <button onClick={() => setIsLight(true)}>Light</button>
        <button onClick={() => setIsLight(false)}>Dark</button>
    
      </div>

      <h3>Font Size</h3>
      <div className="button-bar">
        <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
        <input type="number" value={fontSize} />
        <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
      </div>
    </div>
  );
}

export default AdDesigner;
