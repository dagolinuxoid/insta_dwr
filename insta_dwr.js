/* Get urls of pictures on Instagram */
const links = new Set();
const triggerKey = 'Backspace';
const target = '._aagv';

const saveToClipboard = async (urls) => {
	try {
		await navigator.clipboard.writeText(urls);
		console.log('URLs copied to clipoard');
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
};

window.addEventListener('keyup', event => {
	if (event.key === triggerKey) {
		getUrls().forEach(url => links.add(url));
		console.log(`You got ::${links.size}:: URLs so far`);
		saveToClipboard([...links].join('\n'));
	} else {
		console.log(`HINT: press ${triggerKey} to grab URLs`)
	}
});

function getUrls() {
	const urls = [];
	const rows = document.querySelectorAll(target);
	rows.forEach(row =>
		row.querySelectorAll('img').forEach(img => urls.push(img.src))
	);
	return urls;
}

// save: for i in $(xclip -se c -o);do curl -# -O $i;done
// make_playlist: xclip -se c -o > gallery.m3u
// view: xclip -se c -o | xargs mpv
// lazy_view: xclip -o|xargs mpv 
