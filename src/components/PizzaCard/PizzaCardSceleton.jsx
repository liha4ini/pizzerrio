import React from 'react';
import ContentLoader from "react-content-loader";

export const PizzaCardSceleton = () => {
    return (
        <ContentLoader
            className={'pizza-block'}
            speed={2}
            width={280}
            height={465}
            viewBox="0 0 280 465"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="143" cy="114" r="108" />
            <rect x="-2" y="226" rx="10" ry="10" width="280" height="24" />
            <rect x="0" y="262" rx="10" ry="10" width="280" height="88" />
            <rect x="10" y="383" rx="11" ry="11" width="77" height="38" />
            <rect x="126" y="372" rx="24" ry="24" width="154" height="56" />
        </ContentLoader>
    );
};

