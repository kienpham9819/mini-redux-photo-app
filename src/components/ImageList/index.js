import React from 'react';
import PropTypes from 'prop-types';
import './ImageList.scss';
import { Button } from 'reactstrap';

ImageList.propTypes = {
    data: PropTypes.array,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func
};

ImageList.defaultProps = {
    data: [],
    handleDelete: () => { },
    handleEdit: () => { }
};

function ImageList(props) {
    const { data, handleDelete, handleEdit } = props;

    const handleRemove = (image) => {
        handleDelete(image);
    }

    const handleEditPoto = (image) => {
        handleEdit(image);
    }

    return (
        data && data.length ?
            data.map(image =>
                <div key={image.title} className='image-item' style={{ backgroundImage: `url(${image.imageUrl})` }}>
                    <div>
                        <Button color="primary" onClick={() => handleEditPoto(image)}>Edit</Button>
                        <Button color="danger" onClick={() => handleRemove(image)}>Remove</Button>
                    </div>
                </div>
            )

            : 'no image'
    );
}

export default ImageList;
