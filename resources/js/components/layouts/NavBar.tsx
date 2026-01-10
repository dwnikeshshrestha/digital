import { NavigationMenuDemo } from './NavMenu';
export default function NavBar() {
    return (
        <header className="p-4 font-heading fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50 h-20">
            <NavigationMenuDemo />
        </header>
    );
}