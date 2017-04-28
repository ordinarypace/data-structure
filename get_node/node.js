
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
			this.getHeight(node.children);
			
			if(this.current > this.result){
			console.log(this.current)
				this.result = this.current;
				this.current = 1;
			}
		};
		
		return this.result;
	},
	
	getHeight : function(node){
		if(!node || node.length === 0) return 0;
	
		var i = 0;
		
		for(; i < node.length; i += 1){
			if(node[i].children){
				node = node[i].children;
			} else {
				break;
			}
			
			if(node[0] === undefined) continue;
			
			tagName = node[0].tagName.toLowerCase();
			
			if(this.condition === tagName) this.current += 1;
		}
		
		return this.getHeight(node);
	}
}
