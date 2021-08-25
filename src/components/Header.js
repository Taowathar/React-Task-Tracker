import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <h1 style={headerStyle}>{title}</h1> */}
      {/* <h1 style={{color: 'red', backgroundColor: 'green'}}>{title}</h1> */}
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      ></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'green'
// }

export default Header;
