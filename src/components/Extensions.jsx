import { useAutoAnimate } from "@formkit/auto-animate/react";

const Extensions = ({ items, onRemove }) => {
  const [parent] = useAutoAnimate({ duration: 200 });

  return (
    <section>
      <div
        ref={parent}
        className="mb-16 md:grid grid-cols-2 md:gap-3 lg:grid-cols-3 md:items-stretch"
      >
        {items.map((item) => (
          <article
            key={item.name}
            className="bg-Neutral-0 dark:bg-Neutral-800 mb-3 md:mb-0 p-5 rounded-[20px] border-1 border-Neutral-200 dark:border-Neutral-600 shadow-sm flex flex-col h-full"
          >
            <div className="flex items-start mb-6 lg:mb-11.5 ">
              <img
                src={item.logo}
                alt={item.name}
                className=" flex justify-items-start"
              />
              <div className="flex-col ml-4">
                <h2 className="text-preset-2 text-Neutral-900 dark:text-Neutral-0">
                  {item.name}
                </h2>
                <p className="text-preset-5 text-Neutral-600 dark:text-Neutral-300">
                  {item.description}
                </p>
              </div>
            </div>
            {/* button & toggle */}
            <div className="flex justify-between items-center mt-auto">
              <button
                onClick={() => onRemove(item.name)}
                className="text-preset-6 text-Neutral-900 dark:text-Neutral-0 px-4 py-2 border-1 border-Neutral-300 dark:border-Neutral-600 rounded-full focus:outline-2 focus:outline-offset-2 focus:outline-Red-700 hover:bg-Red-700 hover:border-Red-700 hover:text-Neutral-0 dark:hover:bg-Red-400 dark:hover:border-Red-400 dark:hover:text-Neutral-900"
              >
                Remove
              </button>

              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={item.isActive}
                  className="sr-only peer"
                />
                <div
                  className="relative w-9 h-5 bg-Neutral-300 rounded-full peer peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-Red-700
 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-Neutral-0 after:shadow-sm after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-Red-700"
                ></div>
              </label>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Extensions;
