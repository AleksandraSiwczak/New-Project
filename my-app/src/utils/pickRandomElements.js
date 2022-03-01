export const pickRandomElements = (howMany, elements) => {
	const ids = [...elements];
	return Array.from({ length: howMany }, () => ids.splice(Math.floor((Math.random() * ids.length)), 1)[0])
	//posortowane po punktach 
  }