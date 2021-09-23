import * as fs from 'fs';

const file = fs.readFileSync('data.json');

const data = {};

file.toString().split('\n').forEach(line => {
	if (!line.trim()) {
		return;
	}
	let nft = '';
	try {
		nft = JSON.parse(line);

		nft.attributes.forEach(attribute => {
			data[attribute.trait_type] = data[attribute.trait_type] || {};

			data[attribute.trait_type][attribute.value] = data[attribute.trait_type][attribute.value] || 0;

			data[attribute.trait_type][attribute.value]++;
		});
	} catch(err) {
		console.error(err);
	}
});

console.log(data);
