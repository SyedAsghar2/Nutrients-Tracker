import { Link } from "react-router-dom";

export function SideBar () {
    return (
        <div className="side-bar-container">
            <Link to="/"><button>Home</button></Link>
            <Link to="/logs"><button>Logs</button></Link>
            <Link to="/food"><button>Food</button></Link>
            <Link to="/stats"><button>Stats</button></Link>
        </div>
    )
}
