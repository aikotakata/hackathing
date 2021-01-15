import './modal.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" class = "btn btn-primary" style="background-color:green;width:200;height:70" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };