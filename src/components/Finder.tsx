import {
  SearchIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  XIcon,
} from "@heroicons/react/outline";

export const Finder = () => {
  return (
    <div
      className="finder min-w-[326px] h-[32px] bg-main rounded-lg
                    flex justify-between items-center px-2.5"
    >
      <div className="flex items-center">
        <SearchIcon className="w-4 h-4 text-main-gray mr-2.5" />
        <input className="bg-transparent text-main-gray outline-none text-sm" />
      </div>

      <div className="flex items-center gap-2">
        <span className="font-medium text-dark-gray text-sm">0/0</span>

        <div className="flex items-center gap-1">
          <div className="arrow-container flex items-center bg-secondary rounded-md">
            <button className="p-1">
              <ArrowUpIcon className="w-4 h-4 stroke-2 stroke-dark-gray" />
            </button>
            <div />
            <button className="p-1">
              <ArrowDownIcon className="w-4 h-4 stroke-2 stroke-dark-gray" />
            </button>
          </div>

          <button className="p-1">
            <XIcon className="w-4 h-4 stroke-3 stroke-secondary-gray" />
          </button>
        </div>
      </div>
    </div>
  );
};
