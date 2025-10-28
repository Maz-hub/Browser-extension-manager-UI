const Filter = ({activeFilter, onChangeFilter}) => {
  return (
    <>
      <section className="my-10 md:mb-8 lg:mt-16 md:flex md:justify-between md:items-center">
        <h1 className="text-preset-1 text-Neutral-900 dark:text-Neutral-0 text-center md:text-left md: mb-6 md:mb-0">
          Extensions List
        </h1>
        <div className="flex justify-around md:gap-3 ">
          <button className="btn btn-primary btn-sm cursor-pointer">All</button>
          <button className="btn btn-outline btn-sm cursor-pointer">
            Active
          </button>
          <button className="btn btn-outline btn-sm cursor-pointer">
            Inactive
          </button>
        </div>
      </section>
    </>
  );
};

export default Filter;
