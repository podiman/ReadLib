import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const Loading: React.FC = () => {
    return (
        <div className="page">
            <div className="pageBody">
                <Skeleton />
                <Skeleton animation="wave" variant="rect" width={210} height={200} />
            </div>
        </div>
    );
};

export default Loading;