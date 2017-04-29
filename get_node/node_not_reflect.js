var GetNodeHeight = function(tags, conditionTags){
	if(typeof tags !== 'string' || typeof conditionTags !== 'string') return;
	
	this.current = 1;
	this.result = 0;
	this.condition = conditionTags;
	this.tags = Array.prototype.slice.call(document.querySelectorAll(tags));
	if(this.tags.length === 0) return;
	
	this.initialize();
}

GetNodeHeight.prototype = {
	initialize : function(){
		var node;
		
		while (node = this.tags.shift()){
			this.getHeight(node.querySelectorAll('*'));
			
			if(this.current > this.result){
				this.result = this.current;
				this.current = 1;
			}
		};
		
		return this.result;
	},
	
	getHeight : function(node){
		if(!node || node.length === 0) return;
		
		var i = node.length;
		
		while(i-- >= 0){
			if(node[i] && node[i].children.length > 0){
				if(node[i].children[0].tagName.toLowerCase() === 'li'){
					this.current += 1;
				}
			}
		}
		
		console.log(this.current)
	}
}

new GetNodeHeight('ul', 'li');