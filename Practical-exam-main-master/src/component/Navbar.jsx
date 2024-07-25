import { Link } from 'react-router-dom';
// import 'App.css'
export default function Navbar() {


    return (
        <>
            < div id="Nav">

                <ul>
                    <Link to='/'><li>Roomlist</li> </Link>
                    <Link to='/Roomdetail'> <li>Roomdetail</li> </Link>
                    <Link to='/Reservationform'> <li>ReservationForm</li> </Link>
                    <Link to='/Reservationlist'> <li>ReservationList</li> </Link>
                </ul>

            </div>
        </>
    );
}