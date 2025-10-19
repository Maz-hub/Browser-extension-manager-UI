const Filter = () => {
  return (
    <>
      <section className="my-10">
        <h1 className="text-preset-1 text-Neutral-900 dark:text-Neutral-0 text-center mb-6">
          Extensions List
        </h1>
        <div className="flex justify-around ">
          <button className="btn btn-primary btn-sm">All</button>
          <button className="btn btn-outline btn-sm">Active</button>
          <button className="btn btn-outline btn-sm">Inactive</button>
        </div>
      </section>
    </>
  );
};

export default Filter;
