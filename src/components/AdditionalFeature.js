import React, { useState } from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/carActions";

const startingState = {
  id: 1,
  name: 1,
  price: 1,
};

const AdditionalFeature = (props) => {
  const [payload, setPayload] = useState({
    name: props.feature.name,
    id: props.feature.id,
    price: props.feature.price,
  });
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => {
          props.addFeature(payload);
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    test: "test",
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
