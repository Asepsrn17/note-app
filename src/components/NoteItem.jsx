import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./NoteItemBody";

function NoteItem({id, title, createdAt, body }) {
  return (
    <article className="note-item">
      <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
    </article>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItem;
