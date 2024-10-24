import "./Header.css";

const Header = () => {
  const submit = () => {
    alert("Thank you!");
  }

  return (
    <div id="header-bar">
      <h1 className="title">Pronto</h1>
    </div>
  );
};


export default Header;