let playlists = [];

function generateRandomID() {
    return Math.floor(Math.random() * 999999);
}

module.exports = {
    // GET /playlists
    index: (req, res) => {
        res.json(playlists);
    },

    // GET api/playlists/:id
    show: (req, res) => {
        const { id } = req.params;

        const playlist = playlists.find(pl => pl.id === +id);

        if (!playlist) return res.status(404).json({ message: "Playlist not found" });

        res.json(playlist);
    },

    // POST api/playlists
    save: (req, res) => {
        const { name, tags, musics } = req.body;

        if (typeof name !== "string") {
            return res.status(400).json({ message: "name must be a string" });
        }

        if (!Array.isArray(tags)) {
            return res.status(400).json({ message: "Tags must be an array" });
        }

        if (musics && !Array.isArray(tags)) {
            return res.status(400).json({ message: "Musics must be an array" });
        }

        const newPlaylist = {
            id: generateRandomID(),
            name: name,
            tags, tags,
            musics: musics ?? []
        };


        playlists.push(newPlaylist);

        res.status(201).json(newPlaylist);
    },

    // PUT api/playlists/:id
    update: (req, res) => {
        const { id } = req.params;
        const { name, tags } = req.body;

        console.log({ id, name });
        const playListIndex = playlists.findIndex(pl => pl.id === +id);

        if (playListIndex === -1) {
            return res.status(404).json({ message: "Play list not found" });
        }

        if (typeof playListIndex === "string") {
            return res.status(400).json({ message: "name must be a string" });
        }

        if (typeof name === "string") {
            playlists[playListIndex].name = name;
        }

        if (tags && Array.isArray(tags)) {
            playlists[playListIndex].tags = tags;
        }

        res.json(playlists[playListIndex]);
    },

    // DELETE api/playlists/:id
    delete: (req, res) => {
        const { id } = req.params;

        const playListIndex = playlists.findIndex(pl => pl.id === +id);

        if (playListIndex === -1) {
            return res.status(404).json({ message: "Play list not found" });
        }

        const deletedPlaylist = playlists.splice(playListIndex, 1);

        res.json(deletedPlaylist);
    },
    // POST /api/playlists/:id/musics
    addMusic: (req, res) => {
        const { title, year, artist, album } = req.body;
        const { id } = req.params;

        const playlist = playlists.find(pl => pl.id === +id);

        if (!playlist) return res.status(404).json({ "message": "Playlist not found" });

        if (
            typeof title !== "string" || typeof year !== "number" ||
            typeof artist !== "string" || typeof album !== "string"
        ) {
            return res.status(400).json({ "message": "invalid fields" });
        }

        const newMusic = {
            id: generateRandomID(),
            title,
            year,
            artist,
            album
        }

        playlist.musics.push(newMusic);

        res.status(201).json(newMusic);
    },

    // DELETE /api/playlists/:playlistsId//musics/:musicId
    removeMusic: (req, res) => {
        const { playlistId, musicId } = req.params;

        const playlist = playlists.find(pl => pl.id === +playlistId);

        if (!playlist) return res.status(404).json({ message: "Playlist not found" });

        const musicIndex = playlist.musics.findIndex(music => music.id === +musicId);

        if (musicIndex === -1) {
            return res.status(404).json({ message: "Music not found" });
        }

        playlist.musics.splice(musicIndex, 1);

        res.status(204).end();
    }
}