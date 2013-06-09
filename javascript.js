function desenhaCirculo(id,x, y, r, cor){

	var c=id;
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx2 = ctx;

	ctx.arc(y,x,r,0,2*Math.PI);
	ctx.fill();

	ctx.strokeStyle = cor;
    ctx.lineWidth = 5;
    ctx.stroke()

}
