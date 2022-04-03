animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];
food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];
universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo (tableInfo, captionName){
	let caption = `${captionName} Info` 
	let trs = [];
 		for (let tr = 0; tr<tableInfo.length; tr++){
	let tds = [];
			for ( let td = 0; td<tableInfo[tr].length; td++){
				if(Array.isArray(tableInfo[tr][td])){
					tds.push(`<td>${tableInfo[tr][td].join(`; `)}</td>`) 
				} else tds.push(`<td>${tableInfo[tr][td]}</td>`)
			}
			trs.push(`<tr>${tds.join(` `)}</tr>`)
		}    

			document.write(`<table>
			<caption class="info">${caption}</caption>
			${trs.join(` `)}</table>`)
}

getInfo(animals,`Animals`)
getInfo(food, `Food`)
getInfo(universes, `Universes`)









