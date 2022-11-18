/* Generate urls of pictures for a public Instagram profile */
const links = new Set();

// initial implementation, it isn't ideal but it works
window.addEventListener('keyup', event => {
	if (event.key === 'End') {
		getUrls().forEach(url => links.add(url));
		console.log(`${links.size}`);
	}
});

function getUrls() {
	const urls = [];
	const rows = document.querySelectorAll('._aang');
	rows.forEach(row =>
		row.querySelectorAll('img').forEach(img => urls.push(img.src))
	);
	return urls;
}

// call it once at the end and copy its output from browser's dev console
[...links].join('\n');

// possible bash usage: for i in $(xclip -se c -o);do curl -# -O $i;done
