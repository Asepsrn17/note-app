import React from "react";
import PropTypes from 'prop-types';
import { useNavigate, useParams } from "react-router-dom";
import DetailPageBody from "../components/DetailPageBody";
import { getNote, deleteNote } from "../utils/local-data";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.props.navigate("/");
  }

  render() {
    if (this.state.note) {
      return (
        <section className="detail-page">
          <DetailPageBody note={this.state.note} />
        </section>
      );
    }
  }
}

DetailPage.propTypes = {
  id: PropTypes.string,
  navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper;
