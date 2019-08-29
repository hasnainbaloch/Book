import React, { Component } from 'react';
import './landing.scss';

import Slider from "../slider/slider";
import ExpriceSection from './ex-price-books/ex-price';
import TopSelling from './top-selling/top-selling';
import Deals from './deals/deals';
import Authors from './authors/authors';
import Layout from '../../Layout/Layout';

class Landing extends Component {

    render() {
        return(
            <div>
                <Layout>
                    <Slider/>
                    <ExpriceSection/>
                    <TopSelling/>
                    <Deals/>
                    <Authors/>
                </Layout>
            </div>
        );
    }
}

export default Landing;