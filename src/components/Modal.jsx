import "./FormStyles.css";

export default function Modal({ isVisible, errorMessage = "Error" }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{color : errorMessage ? "red" : "#69f0ae"}}>{ errorMessage ? errorMessage : "The Form Has Been Submitted Successfully"}</h1>
        </div>
      </div>
    );
  } else {
    return <></>
  }
}
