/* Get urls of pictures on Instagram */
const links = new Set();

window.addEventListener('keyup', event => {
	if (event.key === 'End') {
		getUrls().forEach(url => links.add(url));
		console.log(`You got ::${links.size}:: urls so far`);
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

// call it once at the end and "Copy string contents" from devtools output
[...links].join('\n');

// save: for i in $(xclip -se c -o);do curl -# -O $i;done
// view: xclip -se c -o|xargs mpv
