import React from 'react';
import NewsRow from './NewsRow';
import { NewsColumn } from './NewsColumn';
import '../../styles/news.css';
import '../../styles/responsive.news.css';



export class News extends React.Component {
    render() {
        return (
            <section id="b-fsize">
                <div className="container">
                    <NewsRow />
                    <NewsColumn />
                </div>
            </section>
        )
    }
}