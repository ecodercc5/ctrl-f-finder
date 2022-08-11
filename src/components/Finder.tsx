import {
  SearchIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  XIcon,
} from "@heroicons/react/outline";

interface Props {
  search: string;
  onSearchChange: (search: string) => any;
  numMatches: number;
  currentMatch: number;
  onDown: () => any;
  onUp: () => any;
  onClear: () => any;
}

export const Finder: React.FC<Props> = ({
  search,
  onSearchChange,
  numMatches,
  currentMatch,
  onUp,
  onDown,
  onClear,
}) => {
  return (
    <div
      className="finder min-w-[326px] h-[32px] bg-main rounded-lg
                    flex justify-between items-center px-2.5"
    >
      <div className="flex items-center">
        <SearchIcon className="w-4 h-4 text-main-gray mr-2.5" />
        <input
          className="bg-transparent text-main-gray outline-none text-sm"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="font-medium text-dark-gray text-sm">
          {currentMatch}/{numMatches}
        </span>

        <div className="flex items-center gap-1">
          <div className="arrow-container flex items-stretch bg-secondary rounded-md h-full">
            <button className="p-1" onClick={onUp}>
              <ArrowUpIcon className="w-4 h-4 stroke-2 stroke-dark-gray" />
            </button>
            <div className="self-stretch w-[1px] bg-[#4d4d4d]" />
            <button className="p-1" onClick={onDown}>
              <ArrowDownIcon className="w-4 h-4 stroke-2 stroke-dark-gray" />
            </button>
          </div>

          <button className="p-1" onClick={onClear}>
            <XIcon className="w-4 h-4 stroke-3 stroke-secondary-gray" />
          </button>
        </div>
      </div>
    </div>
  );
};
