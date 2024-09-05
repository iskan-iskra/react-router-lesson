import PropTypes from "prop-types";
import { cloneElement } from "react";

const MyRoute = ({ path, component }) => cloneElement(component, { key: path });

MyRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};

export default MyRoute;
