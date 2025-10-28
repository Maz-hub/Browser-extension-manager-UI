const Filter = ({ activeFilter, onChangeFilter }) => {
  return (
    <>
      <section className="my-10 md:mb-8 lg:mt-16 md:flex md:justify-between md:items-center">
        <h1 className="text-preset-1 text-Neutral-900 dark:text-Neutral-0 text-center md:text-left mb-6 md:mb-0">
          Extensions List
        </h1>
        <div className="flex justify-around md:gap-3 ">
          <button
            onClick={() => onChangeFilter("all")}
            className={`btn btn-sm cursor-pointer ${
              activeFilter === "all" ? "btn-primary" : "btn-outline"
            }`}
          >
            All
          </button>
          <button
            onClick={() => onChangeFilter("active")}
            className={`btn btn-sm cursor-pointer ${
              activeFilter === "active" ? "btn-primary" : "btn-outline"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => onChangeFilter("inactive")}
            className={`btn btn-sm cursor-pointer ${
              activeFilter === "inactive" ? "btn-primary" : "btn-outline"
            }`}
          >
            Inactive
          </button>
        </div>
      </section>
    </>
  );
};

export default Filter;
