import { useState } from "react";

export default function vicky() {

    const [objectsArray, setObjectsArray] = useState([{ name: "Victor", id: 1 }]);
    const [chosenId, setChosenId] = useState("");

    const handleClone = () => {
        const newClone = { name: "Victor", id: objectsArray.length + 1 };
        setObjectsArray((objectsArray) => [...objectsArray, newClone]);
    };

    const deleteElement = (e) => {
        const selectedId = e.target.value;
        setObjectsArray((objectsArray) =>
        objectsArray.filter((object) => object.id !== +selectedId)
        );
        setChosenId("");
    };

    return (
        <div>
            <div className="cards-container">
                {objectsArray.map((obj) => (
                    <div className="card" key={obj.id} >
                        <h2>{obj.name}</h2>
                        <p>ID: {obj.id}</p>
                        <img src="/victor.png" />
                        <button className="bttn" onClick={handleClone}>Clone!</button>
                    </div>
                ))}
            </div>
            <h2>Use the filter method and a select box to remove the clones that didn't turn out right.</h2>
            <label>SELECT CLONE TO TERMINATE: </label>
            <select  value={chosenId} onChange={deleteElement}>
                {objectsArray.map((obj) => (
                    <option key={obj.id} value={obj.id} >{obj.id}</option>
                ))}
            </select>
        </div>
    );
}

