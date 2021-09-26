import { StyledSmallQuote } from "../styles";

function SmallQuote({ quote, character, anime }) {
    return (
        <StyledSmallQuote>
            <p>"{quote}"</p>
            <h4>
                <span className="character">{character}</span> <em>in</em>
                <span className="anime">{anime}</span>
            </h4>
        </StyledSmallQuote>
    );
};

export default SmallQuote;