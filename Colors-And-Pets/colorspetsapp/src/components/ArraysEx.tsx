import { useState } from "react";
import { Pet } from "../models/pet";

function ArraysEx() {
  const [colors, setColors] = useState<string[]>(["red", "orange", "purple"]);
  const [pets, setPets] = useState<Pet[]>([
    { name: "Dani", type: "Dog", id: 1 },
    { name: "Cocoa", type: "Dog/Ahole", id: 2 },
    { name: "Boots", type: "Cat", id: 3 },
    { name: "Belle", type: "Fat-Cat", id: 4 },
  ]);

  function addColor(color: string): void {
    setColors([...colors, color]);
  }
  function removePet(id: number) {
    setPets(pets.filter((x) => x.id !== id));
  }

  return (
    <div className="ArraysEx">
      <h1>Arrays Exercise</h1>
      <h2>Colors</h2>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <button onClick={() => addColor("Violet")}>Add Violet</button>
      <button onClick={() => addColor("Blue")}>Add Blue</button>
      <button onClick={() => addColor("Green")}>Add Green</button>

      <h2>Pets</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
        {pets.map((pet, id) => (
          <tr key={id}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td>
              <button onClick={() => removePet(pet.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ArraysEx;
