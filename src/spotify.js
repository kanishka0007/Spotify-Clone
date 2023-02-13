export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "97643647a30842e6bdcf6e68df41977f";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-playback-position",
  "user-read-email",
  "user-library-modify",
  "playlist-modify-public",
  "ugc-image-upload",
  "user-follow-modify",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-private",
  "user-read-playback-state",
  "user-top-read",
  "user-library-read",
  "playlist-modify-private",
  "user-follow-read",
  "playlist-read-private",
  "playlist-read-collaborative",
];

export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };
  
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  
