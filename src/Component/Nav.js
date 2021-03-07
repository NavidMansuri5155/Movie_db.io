import React, { Component } from 'react';
import "./Nav.css"
import DehazeIcon from '@material-ui/icons/Dehaze';
import MovieIcon from '@material-ui/icons/Movie';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';

class Nav extends Component {
    state = {}
    render() {
        return (
            <>
                <div>
                    <header>
                        <h2><MovieFilterIcon style={{fontSize:"40px"}}/> The Movie_DB</h2>
                        <span class="logo">
                        <FilterVintageIcon style={{fontSize:"50px"}}/>
                        </span>
                        <span class="menu">
                            <DehazeIcon />
                            <div class="dropdown">
                                <a href="#"><MovieIcon />Latest Movies</a>
                                <a href="#"><FavoriteBorderIcon />Save Card</a>
                            </div>
                        </span>
                    </header>
                </div>
            </>
        );
    }
}

export default Nav;