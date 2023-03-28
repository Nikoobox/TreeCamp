import React from "react";
import { connect } from "react-redux";

import Footer from "./footer";

const mapState = (state) => {
  let currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
    currentUserId: state.session.id,
  };
};

export default connect(mapState, null)(Footer);
