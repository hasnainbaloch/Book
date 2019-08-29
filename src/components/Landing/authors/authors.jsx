import React, { Component } from 'react';
import './authors.scss';

import author from '../../../assets/photos/author3.jpg';
import author1 from '../../../assets/photos/author4.jpg';
import author2 from '../../../assets/photos/author5.jpg';

class Authors extends Component {


    render(){
        return(
            <div id="authors-wrap">
                <div className="top-row">
                    <h2>Top Authors</h2>
                    <span>View all <i className="fas fa-chevron-right"></i></span>
                </div>
                <div className="authors-row">
                    <div className="item">
                        <div className="img-wrap">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV96jnL4cBvbJEFebJ1LLMYp4fe59CellQMqFvNqtinY07V3A_" alt="author."/>
                        </div>
                        <div className="details">
                            <h5>Author Name</h5>
                            <span>99 books</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-wrap">
                            <img src={author} alt="author."/>
                        </div>
                        <div className="details">
                            <h5>Author Name</h5>
                            <span>69 books</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-wrap">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV96jnL4cBvbJEFebJ1LLMYp4fe59CellQMqFvNqtinY07V3A_" alt="author."/>
                        </div>
                        <div className="details">
                            <h5>Author Name</h5>
                            <span>239 books</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-wrap">
                            <img src={author2} alt="author."/>
                        </div>
                        <div className="details">
                            <h5>Author Name</h5>
                            <span>199 books</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-wrap">
                            <img src={author1} alt="author."/>
                        </div>
                        <div className="details">
                            <h5>Author Name</h5>
                            <span>139 books</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-wrap">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV96jnL4cBvbJEFebJ1LLMYp4fe59CellQMqFvNqtinY07V3A_" alt="author."/>
                        </div>
                        <div className="details">
                            <h5>Author Name</h5>
                            <span>29 books</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Authors;