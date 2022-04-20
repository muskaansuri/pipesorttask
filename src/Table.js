const Table = ({ data, select }) => {
  return (
    <div   className="d-flex"> 
        <div>
      {data.map((item) => {
        return (
          <div className="d-flex align-items-center justify-content-between mx-auto main text-start">
            <h5 className="text-primary text-start ">{item.first_name}</h5>
            <h5 className="text-primary text-start ">{item.email}</h5>
          </div>
        );
      })}</div>
      <div  style={{marginLeft:"200px"}}>
        {select.map((item) => {
          return <h5 className="text-primary">{item.gender}</h5>;
        })}
      </div>
    </div>
  );
};

export default Table;
