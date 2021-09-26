import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { animeListPageNumStore } from "../store";
import { StyledPagination } from "../styles";

function Pagination({ listLength }) {
    const [pageNum, setPageNum] = useRecoilState(animeListPageNumStore);
    const [numArr, setNumArr] = useState([]);

    useEffect(() => {
        const paginationNum = () => {
            const max = Math.floor(listLength / 50);
            const numbers = Array.from({ length: max }, (_, i) => (max - i));
            setNumArr(numbers.sort((a, b) => a - b));
        };
        paginationNum();
    }, [listLength]);
    return (
        <StyledPagination>
            {numArr?.length ? numArr?.map((num) => (
                <button
                    className={pageNum === (num - 1) ? "active" : ""}
                    onClick={() => setPageNum(num)}
                    key={num}>{num}</button>
            )) : null}
        </StyledPagination>
    )
};

export default Pagination;