export interface IBadge {
    label: string;
    onClick?: () => void;
    className?: string;
}

export function Badge(props: IBadge) {
    const { label, onClick, className } = props;

    return (
        <button onClick={onClick}
            className={`px-2 py-1 rounded-full text-sm font-semibold capitalize transition-colors ${onClick ? "cursor-pointer" : ""} ${className}`}
        >
            {label}
        </button>
    )
}
