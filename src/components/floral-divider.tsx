import { PaisleyIcon } from "./icons/paisley-icon";

export const FloralDivider = () => {
    return (
        <div className="py-8 flex items-center justify-center text-primary/30" aria-hidden="true">
            <div className="w-1/4 h-px bg-border"></div>
            <PaisleyIcon className="w-8 h-8 mx-4 transform rotate-90" />
            <div className="w-1/4 h-px bg-border"></div>
        </div>
    );
};
