import React from "react"; 
import "./Body.css";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Body({spotify}) {
    const [{discover_weekly}] = useDataLayerValue(); 

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>

                </div>
            </div>
            
            <div className="body_songs">
            <div className="body_icons">
                <PlayCircleFilledIcon className="body_shuffle" />
                <FavoriteIcon fontSize="large"/>
                <MoreHorizIcon />
            </div>
            {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}


            </div>
        </div>
    );
}
export default Body;