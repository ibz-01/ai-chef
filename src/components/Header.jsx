import chefLogo from "./download.jpg";

export default function Header()
{
    return (
        <>
        <header>
            <img src={chefLogo} />
            <h1> AI Chef </h1>
        </header>
        </>
    )
}