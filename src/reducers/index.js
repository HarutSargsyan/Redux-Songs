import {combineReducers} from 'redux'

const songReducer = () =>{
    return [
        {title:'Hey Jude', duration: '2:30', singer:'Beatels' },
        {title:'can\'t I?', duration: '4:05', singer:'Misho'},
        {title: 'Knockin\' on heavenn\'s door ', duration: '3:15', singer:'Bob dylan'},
        {title:'Don\'t love yourself', duration: '3:35', singer:'Beatels'},
    ]
}
 
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECT'){
        return action.payload
    } 
    return selectedSong
}

export default combineReducers({
    songs : songReducer,
    selectedSong : selectedSongReducer
})