import React, { Component } from 'react';

class ContainerOne extends Component {
    render() {
        return (
            <div className="col l-2 m-0 c-0">
            <nav className="category">
                <h3 className="category_heading">Danh mục</h3>
                <ul className="category-list">
                <li className="category-item category-item--active">
                    <a href="/" className="category-item_link">Trang điểm mặt</a>
                </li>
                <li className="category-item">
                    <a href="/" className="category-item_link">Trang điểm môi</a>
                </li>
                <li className="category-item">
                    <a href="/" className="category-item_link">Trang điểm mắt</a>
                </li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default ContainerOne;