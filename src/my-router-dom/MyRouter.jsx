import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  Children,
  isValidElement,
} from "react";
import PropTypes from "prop-types";

const MyRouter = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleLocationChange = useCallback(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [handleLocationChange]);

  const matchedChild = useMemo(() => {
    return Children.toArray(children).find(
      (child) =>
        isValidElement(child) &&
        (child.props.path === currentPath || child.props.path === "*")
    );
  }, [children, currentPath]);

  return <>{matchedChild || null}</>;
};

MyRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyRouter;
