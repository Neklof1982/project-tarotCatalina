import Image from "next/image";

const Introduction = () => {
    return ( 
        <div className="relative">
            <div className="text-center" id="home">
                <h2 className="text-3xl mb-3">Explora el mundo del</h2>
                <h1 className="text-6xl font-bold mb-3 animate-fade-in animate-duration-1500">
                    <span className="text-gradient">Tarot</span>
                </h1>
                <h3 className="text-xl text-gray-400">Descubre el misterio y la sabiduría de las cartas.</h3>
                <Image 
                    src="/images/ImagenTitulo2.jpg" 
                    alt="Profile pic" 
                    width={500} 
                    height={500} 
                    className="rounded-full p-10" 
                    priority
                />
            </div>
        </div>
    );
}

export default Introduction;