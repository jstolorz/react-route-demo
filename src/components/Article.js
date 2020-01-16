import React from 'react';

const Article = props => {

    const style = {
        marginTop: 40
    }

    return (
        <div>
           <article style={style}>
               <h3 style={{
                   marginBottom: 3,
                   textTransform: "uppercase"
               }}
               >{props.title}</h3>
               <span style={{
                   display: "block",
                   marginBottom: 10,
                   fontSize: 12
               }}>{props.author}</span>
               <p>{props.text}</p>
           </article>
        </div>
    );
};


export default Article;