import React    from "react";
import template from "./GenerateButton.jsx";

class GenerateButton extends React.Component {
  render() {
    return template.call(this);
  }
}

export default GenerateButton;
