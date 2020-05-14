import React from "react";

const ModalComponent = ({ text = "Default Text", component }) => {
  return (
    <div>
      <button>{text}</button>
      {component && <component></component>}
    </div>
  );
}

export default ModalComponent;