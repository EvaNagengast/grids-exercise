window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById("songTwo");
  const options = {
    width: `40%`,
    height: `200`,
    uri: "spotify:track:1dEOKKLDpgHJGYKmMujxrN",
  };
  const callback = (EmbedController) => {
    document.querySelectorAll(".episode").forEach((episode) => {
      episode.addEventListener("click", () => {
        EmbedController.loadUri(episode.dataset.spotifyId);
      });
    });
  };

  IFrameAPI.createController(element, options, callback);
};
 