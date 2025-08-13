import { itemsNavbar } from "../../data";
import { ModeToggle } from "./toggle-theme";

const NavBar = () => {
    return (
        <nav className="fixed z-20 left-0 right-0 flex flex-col items-center w-full justify-center h-max bottom-20">
            <div className="flex items-center gap-2 justify-center px-4 py-1 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-full">
                {itemsNavbar.map((item) => (
                    /* Recorrer itemsNav {item.icon} */
                    <div key={item.id} className="cursor-pointer hover:dark-bg-slate-8090 hover:bg-slate-400 px-3 py-2 rounder-full transition duration-150">
                        <a href={item.link} className="text-blue-500 dark:text-white hover:text-blue-700 dark:hover:text-blue-300">
                            {item.icon}
                        </a>
                    </div>

                ))}
                <ModeToggle />

            </div>

        </nav>

    );
}

export default NavBar;