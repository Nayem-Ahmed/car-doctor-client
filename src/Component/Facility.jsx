const Facility = ({facility}) => {
    const { name, details} = facility;
    return (
        <div className="card  bg-base-200 shadow-xl  border-t-4 border-t-orange-500 ">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm text-gray-500">{details}</p>
        </div>
      </div>
    );
};

export default Facility;