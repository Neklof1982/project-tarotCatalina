interface CardProps {
    title: string,
    description: string;
    active?: boolean;
}

const Card = ({ title, description, active }: CardProps) => {
    return (
        <div className="relative w-[300px] h-[400px] m-10 flex items-start justify-start transition-all duration-500 cursor-pointer hover:bg-[#4b1248] dark:hover:bg-[#4b1248] group overflow-hidden">
            {active && (
                <>
                    <span className="absolute block top-0 left-0 w-full h-1 animate-to-right" />
                    <span className="absolute block -top-full right-0 w-1 h-full animate-to-bottom"
                             style={{animationDelay: "0.5s", }}/>
                    <span className="absolute block bottom-0 -righ-full w-full h-1 animate-to-left"
                            style={{animationDelay: "1s", }}/>
                    <span className="absolute block -bottom-full -left-0 w-1 h-full animate-to-top"
                            style={{animationDelay: "1.5s", }}/>
                </>
            )}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center text-black dark:text-white group-hover:text-white">
                <h2 className="text-3xl mb-5 font-bold">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
}

export default Card;