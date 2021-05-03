const ModalContent = ({ data }) => {
  if (typeof data !== "object") return data;
  if (typeof data === "object" && data !== null) {
    return (
      <ul>
        {data.map(({ number }, idx) => {
          return (
            <li key={idx}>
              <a href={process.env.REACT_APP_TARGET_BASE_URL + number} target="_blank" rel="noreferrer">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
  return <div />;
};

export default ModalContent;
