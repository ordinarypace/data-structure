function replaceString(str, condition){
	if(typeof str !== 'string' || typeof condition !== 'string') throw new Error('str is not string!!');
	
	var result = str.replace(/(\.\s+[a-z]?)/g, function($1){
		return $1.toUpperCase();
	})
	
	console.log(result);
}

replaceString('tourists who will come for the games. Our chief foreign correspondent. Richard engel is in moscow. With more on this latest threat', '.');