export interface IBadge {
    label: string;
    key?: string;
    onClick?: () => void;
    className?: string;
}

export function Badge(props: IBadge) {
    const { key, label, onClick, className } = props;

    return (
        <button key={key} onClick={onClick}
            className={`px-2 py-1 rounded-full text-sm font-semibold capitalize transition-colors ${onClick ? "cursor-pointer" : ""} ${className}`}
        >
            {label}
        </button>
    )
}
