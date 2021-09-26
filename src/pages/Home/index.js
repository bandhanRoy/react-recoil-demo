import { useRecoilValue } from "recoil";
import { AnimePill, Pagination, Quote } from "../../components";
import { animeTitlesStore } from "../../store";
import { slicedAnimeTitlesSelector } from "../../store/selector";
import { StyledHomePage } from "../../styles";

function HomePage() {
    const animes = useRecoilValue(animeTitlesStore);
    const slicedAnimes = useRecoilValue(slicedAnimeTitlesSelector);
    const colors = ["#FAE1DA", "#E8C6AD", "#F2E2ED", "#D6EBE4", "#BFDCD0"];

    const generateColor = () => {
        const randNum = Math.floor(Math.random() * 5);
        return colors[randNum];
    };
    return (
        <StyledHomePage>
            <header>
                <h2>Anime Quote Generator</h2>
            </header>
            <main>
                <Quote />
                <div className="animes">
                    <h3>All Animes</h3>
                    {animes?.length ? (
                        <p>Click on any anime to see a quote from it</p>
                    ) : null}
                    <div className="flex">
                        {animes?.length ? (
                            slicedAnimes?.map((anime) => (
                                <div key={anime} style={{ margin: "0 1.3rem 1.3rem 0" }}>
                                    <AnimePill anime={anime} color={generateColor()} />
                                </div>
                            ))
                        ) : (
                            <p className="nodata">No anime found 😞 </p>
                        )}
                    </div>
                    {animes?.length > 50 ? (
                        <div className="pagination">
                            <Pagination listLength={animes?.length} />
                        </div>
                    ) : null}
                </div>
            </main>
        </StyledHomePage>
    );
};



export default HomePage;