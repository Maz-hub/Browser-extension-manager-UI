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
            className={`btn btn-sm cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-Red-700   ${
              activeFilter === "all"
                ? "btn-primary dark:bg-Red-500"
                : "btn-outline dark:hover:bg-Neutral-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => onChangeFilter("active")}
            className={`btn btn-sm cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-Red-700 ${
              activeFilter === "active"
                ? "btn-primary"
                : "btn-outline dark:hover:bg-Neutral-600"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => onChangeFilter("inactive")}
            className={`btn btn-sm cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-Red-700 ${
              activeFilter === "inactive"
                ? "btn-primary"
                : "btn-outline dark:hover:bg-Neutral-600"
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
