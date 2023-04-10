import { NavLink } from "react-router-dom";



function Menu() {
    return (
        <>
        <h2>Challenges</h2>
        <nav>
            <ul>
                <li>
                    <NavLink to="day1">Day 1</NavLink>
                </li>
                <li>
                    <NavLink to="day2" >Day 2</NavLink>
                </li>
                <li>
                    <NavLink to="day3" >Day 3</NavLink>
                </li>
                <li>
                    <NavLink to="day4" >Day 4</NavLink>
                </li>
                <li>
                    <NavLink to="day5" >Day 5</NavLink>
                </li>
                <li>
                    <NavLink to="day6" >Day 6</NavLink>
                </li>
                <li>
                    <NavLink to="day7" >Day 7</NavLink>
                </li>
                <li>
                    <NavLink to="day8" >Day 8</NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default Menu;