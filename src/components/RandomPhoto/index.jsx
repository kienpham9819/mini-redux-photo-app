import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './RandomPhoto.scss';

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func
};

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: () => { },
    onRandomButtonBlur: () => { }
}

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);

    return `https://picsum.photos/id/${randomId}/300/300`;
}

function RandomPhoto(props) {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur, cname } = props;

    const handRandomPhotoClick = async () => {
        const url = getRandomImageUrl();
        onImageUrlChange(url);
    }

    return (
        <div className={`random-photo ${cname}`}>
            <div className='random-photo__button'>
                <Button
                    outline
                    color="primary"
                    name={name}
                    onClick={handRandomPhotoClick}
                    onBlur={onRandomButtonBlur}
                >
                    Random a photo
                </Button>
            </div>
            <div className='random-photo__photo'>
                {
                    imageUrl &&
                    <img src={imageUrl} alt="Opp ... this image is not exist, click againt" />
                }
            </div>
        </div>
    );
}

export default RandomPhoto;
