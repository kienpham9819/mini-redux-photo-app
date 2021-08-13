import Banner from 'components/Banner';
import Images from 'constants/images';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';

// MainPage.propTypes = {};

function MainPage(props) {
    return (
        <div className="photo-main">
            <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <NavLink exact to="/photos/add">Add new photo</NavLink>
            </Container>
        </div>
    );
}

export default MainPage;
