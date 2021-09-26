import { StyledQuote } from "../styles";

function Quote() {
    const quoteObj = {
        anime: "Naruto",
        character: "Pain",
        quote:
            "Because of the existence of love - sacrifice is born. As well as hate. Then one comprehends... one knows PAIN.",
    };

    return (
        <StyledQuote>
            <p>"{quoteObj.quote}"</p>
            <h4>
                <span className="character">{quoteObj.character}</span> <em>in</em>{" "}
                <span className="quote">{quoteObj.anime}</span>
            </h4>
        </StyledQuote>
    )
};

export default Quote;