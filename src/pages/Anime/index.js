import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ContentLoader from 'react-content-loader'
import { StyledAnimePage, StyledLink } from "../../styles";
import { SmallQuote } from "../../components";
import styled from "styled-components";

function AnimePage() {
    const param = useParams();
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (param?.name) {
            setLoading(true);
            const fetchAnimeQuotes = async () => {
                try {
                    let res = await fetch(
                        `https://animechan.vercel.app/api/quotes/anime?title=${param?.name}`
                    );
                    res = await res.json();
                    setQuotes(res);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            };
            fetchAnimeQuotes();
        }
    }, [param]);

    const SLink = styled(Link)`${StyledLink};`;

    return (
        <StyledAnimePage>
            <h2>Quotes from {param?.name}</h2>
            <SLink to="/">&laquo; Go back</SLink>
            {loading ?
                (<ContentLoader viewBox="0 0 300 30">
                    <rect x="0" y="0" rx="0" ry="0" width="145" height="10" />
                    <rect x="0" y="15" rx="0" ry="0" width="145" height="5" />
                    <rect x="0" y="25" rx="0" ry="0" width="145" height="5" />
                    <rect x="155" y="0" rx="0" ry="0" width="145" height="10" />
                    <rect x="155" y="15" rx="0" ry="0" width="145" height="5" />
                    <rect x="155" y="25" rx="0" ry="0" width="145" height="5" />
                </ContentLoader>) :
                (<div className="grid">
                    {quotes?.length ? (
                        quotes?.map((quote, index) => (
                            <div key={quote?.quote + index} className="anime">
                                <SmallQuote
                                    anime={quote?.anime}
                                    character={quote?.character}
                                    quote={quote?.quote}
                                />
                            </div>
                        ))
                    ) : (<p className="nodata">No Quote found 😞</p>)}
                </div>)}
        </StyledAnimePage>
    );
};


export default AnimePage;