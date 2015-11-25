Array.prototype.forEach=function(fn){
  for(var i=0;i<this.length;i++){
    fn(this,this[i],i);
  }
};
