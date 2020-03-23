import React, { useEffect, useState } from 'react';
import Modal from "./Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="main-wrapper">
      <h1>GSAP React Modal</h1>
      <button className="button open" onClick={toggleModal}>Show Modal</button>
      <Modal
        show={modalVisible}
        close={toggleModal}
      />
    </div>
  );
}

export default App;
