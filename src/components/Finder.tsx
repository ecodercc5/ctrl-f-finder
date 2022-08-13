import {
  SearchIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Button } from "./Button";
import { motion } from "framer-motion";

interface Props {
  search: string;
  onSearchChange?: (search: string) => any;
  numMatches: number;
  currentMatch: number;
  onDown?: () => any;
  onUp?: () => any;
  onClose?: () => any;
}

export const Finder: React.FC<Props> = ({
  search,
  onSearchChange,
  numMatches,
  currentMatch,
  onUp,
  onDown,
  onClose,
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
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="font-medium text-dark-gray text-sm">
          {currentMatch}/{numMatches}
        </span>

        <div className="flex items-center gap-1">
          <div className="arrow-container flex items-stretch bg-secondary rounded-md h-full overflow-hidden">
            <Button icon={ArrowUpIcon} onClick={onUp} />
            <div className="self-stretch w-[1px] bg-[#4d4d4d]" />
            <Button icon={ArrowDownIcon} onClick={onDown} />
          </div>

          <motion.button
            className="p-1 rounded-md"
            onClick={onClose}
            whileHover={{ backgroundColor: "#4D4D4D" }}
            whileTap={{ opacity: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <XIcon className="w-4 h-4 stroke-3 stroke-secondary-gray" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};
