interface TitleProps {
    title: string;
}

const Title = ({ title = "Menu" }: TitleProps) => {
    return (
        <>
            <div className="px-5 pt-4 hidden lg:block">
                <div className="flex flex-row items-center">
                    <div className="text-xs font-bold tracking-wide text-gray-400">{title}</div>
                </div>
            </div>
        </>
    )
}

export default Title