import './message.css'

function Message() {
  const san = 14;
  const location = "almaty";
  const name = "kaisar";
  return (
    <h1>
      Hello, i`m {name}; My age:{san},i live in {location}
    </h1>
  );
}

export default Message;
