import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editPhoto } from 'features/Photo/photoSlice';
import './styles.scss';

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddmode = !photoId;
    const image = useSelector(state => state.photos.find(photo => photo.title === photoId));

    const initialValues = !isAddmode ?
        image
        :
        {
            title: '',
            categoryId: null,
            imageUrl: ''
        };

    const handSubmit = (values) => {
        if (photoId) {
            dispatch(editPhoto(values));
        } else {
            dispatch(addPhoto(values));
        }

        history.push('/photos');
    }



    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />

            <div className="photo-edit__form">
                <PhotoForm
                    initialValues={initialValues}
                    onSubmit={handSubmit}
                    isAddmode={isAddmode}
                />
            </div>
        </div>
    );
}

export default AddEditPage;
