import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Home = () => {
    const allNews = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <h2 className='text-center'>Dragon News Home: {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummaryCart
                    key={news._id}
                    news={news}
                ></NewsSummaryCart>) 
            }
        </div>
    );
};

export default Home;