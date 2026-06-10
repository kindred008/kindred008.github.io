export interface ISectionTitleProps {
    title: string;
}

export function SectionTitle(props: ISectionTitleProps) {
    const {title} = props;
    return (
        <div className="flex w-full justify-center px-2">
            <h2 className="mt-2 inline-block border-b-3 border-red-700 pb-2 text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl">
                {title}
            </h2>
        </div>
    );
}