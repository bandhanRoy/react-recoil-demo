import { Link } from "react-router-dom";
import { StyledPill } from "../styles";

function AnimePill({ anime, color }) {
    return (
        <StyledPill style={{ background: color }}>
            <Link to={`/anime/${anime}`}>{anime}</Link>
        </StyledPill>
    )
}

export default AnimePill;