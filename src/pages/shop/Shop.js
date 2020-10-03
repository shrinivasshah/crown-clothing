import React from "react";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
const ShopPage = ({match}) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
        </div>
    );
};

export default ShopPage;
