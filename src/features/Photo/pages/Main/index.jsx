import Banner from 'components/Banner';
import Images from 'constants/images';
import { photoSelector } from 'features/Photo/photoSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import ImageList from 'components/ImageList';
import { removePhoto } from 'features/Photo/photoSlice';
import { useDispatch } from 'react-redux';

function MainPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const images = useSelector(photoSelector);

    const handleRemovePhoto = (image) => {
        const action = removePhoto(image);
        dispatch(action);
    }

    const handleEditPhoto = (image) => {
        const url = `photos/${image.title}`;
        history.push(url);
    }

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <ImageList
                    data={images}
                    handleDelete={handleRemovePhoto}
                    handleEdit={handleEditPhoto} />
                <NavLink exact to="/photos/add">Add photo</NavLink>
            </Container>
        </div>
    );
}

export default MainPage;
