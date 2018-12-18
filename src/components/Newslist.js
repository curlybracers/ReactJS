import React from 'react';
const Newslist = (props) => {
    const items = props.sendNews.map((data,index) => {
    return (
        <div key={index}>
        <h3>{data.firstName}</h3>
        </div>
    )
})
    return(
        <div>{items}</div>
    )
}


export default Newslist;