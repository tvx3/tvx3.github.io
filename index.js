const addToWatchlist = document.getElementById('addToWatchlist');
const poster = document.getElementById('poster');
const watchlistdiv = document.getElementById('watchlist');
const clearWatchlist = document.getElementById('clearWatchlist');
if (addToWatchlist && poster) {
    addToWatchlist.addEventListener('click', () => {
        let watchlist = JSON.parse(localStorage.getItem('watchlist'));
        if (!watchlist) {
            watchlist = []
        }
        watchlist.push({'id': window.location.pathname.replace(/[\/\\]/g, ''),'poster': poster.src});
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    });
}
if (watchlistdiv) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist'));
    let a;
    let img;
    let watchlistitems = [];
    watchlist.forEach(item => {
        if (watchlistitems != item.id) {
            watchlistitems.push(item.id);
            a = document.createElement('a');
            a.href = `../${item.id}/`;
            img = document.createElement('img');
            img.src = item.poster;
            img.classList.add('img-thumbnail');
            img.id = 'poster';
            a.appendChild(img);
            watchlistdiv.appendChild(a);
            a = null;
            img = null;
        }
    });
}
if (clearWatchlist) {
    clearWatchlist.addEventListener('click', () => {
        localStorage.setItem('watchlist', '[]');
        location.reload();
    })
}