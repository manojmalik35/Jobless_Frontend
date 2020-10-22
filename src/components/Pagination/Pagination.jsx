import React from 'react';
import {Pagination} from 'react-bootstrap';

const Paginate = (props) => {
    let { totalJobs, active, handlePageChange } = props;
    let noOfPages = 0;
    if (totalJobs <= 12) noOfPages = 1;
    else noOfPages = totalJobs % 12 === 0 ? (totalJobs / 12) : Math.floor(totalJobs / 12) + 1;
    let pages = [];
    pages.push(
        <Pagination.Prev disabled={active === 1} onClick={()=>handlePageChange(active - 1)}/>
    );
    for (let i = 1; i <= noOfPages; i++) {
        pages.push(
            <Pagination.Item key={i} active={i === active} onClick={()=>handlePageChange(i)}>
                {i}
            </Pagination.Item>
        )
    }
    pages.push(
        <Pagination.Next disabled={active === noOfPages} onClick={()=>handlePageChange(active + 1)}/>
    )

    return (
        <Pagination>{pages}</Pagination>
    )
}

export default Paginate;