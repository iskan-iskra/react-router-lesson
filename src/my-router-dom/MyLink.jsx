import { useCallback } from "react";
import PropTypes from "prop-types";

const MyLink = ({ to, children }) => {
  const handleClick = useCallback(
    (event) => {
      event.preventDefault();

      if (to) {
        window.history.pushState(null, "", to);
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
      }
    },
    [to]
  );

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

MyLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyLink;
