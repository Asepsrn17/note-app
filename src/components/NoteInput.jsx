import React from "react";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            type="text"
            className="add-new-page__input__title"
            placeholder="Catatan Rahasia saya"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <div
            className="add-new-page__input__body"
            contentEditable="true"
            data-placeholder="Sebenarnya saya adalah..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></div>
        </div>
        <div className="add-new-page__action">
          <button
            className="action"
            type="button"
            title="simpan"
            onClick={this.onSubmitEventHandler}
          >
            <FiCheck />
          </button>
        </div>
      </section>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
