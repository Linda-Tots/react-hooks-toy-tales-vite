import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // Step 2: Fetch all toys on page load
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toys) => setToys(toys));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Step 3: Add a Toy
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  // Step 4: Donate / Delete a Toy
  function handleDeleteToy(id) {
    setToys(toys.filter((toy) => toy.id !== id));
  }

  // Step 5: Like a Toy
  function handleUpdateToy(updatedToy) {
    setToys(
      toys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;