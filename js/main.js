window.onload = function() {
	var cango = ["1,1","1,2","1,3","1,4","1,5",
							 "2,1","2,2","2,3","2,4","2,5",
							 "3,1","3,2","3,3","3,4","3,5",
							 "4,1","4,2","4,3","4,4","4,5",
							 "5,1","5,2","5,3","5,4","5,5"];
	var index = 1;
	var taken = [];
	var ex = $();
	$(".gridcell").on("click",function() {
		if(this.innerHTML === "" && this.className !== "noclick"){
			$("#undo").on("click",function(){
				main(ex);
			});
				main(this);
				//Undo Script
			}
		}
	});
	$(".btn").on("click",function(){
		location.reload();
	});
}
function main(obj){
	var pos = obj.className;
	pos = pos.replace("gridcell ", "");
	pos = pos.replace("row", "");
	pos = pos.replace("col", "");
	pos = pos.split(" ");
	var col = parseInt(pos[0]);
	var row = parseInt(pos[1]);
	if(cango.indexOf(row.toString() + "," + col.toString()) !== -1){
		var ex = obj;
		$(".current").removeClass("current");
		$(".cango").removeClass("cango");
		obj.innerHTML = index;
		index = index + 1;
		$(obj).css("cursor","default");
		$(obj).addClass("noclick");
		$(obj).addClass("current");
		taken[taken.length] = row + "," + col;
		cango = [];
		if(row - 3 > 0 && taken.indexOf((row - 3).toString() + "," + col) === -1){
			cango[cango.length] = (row - 3).toString() + "," + col.toString();
		}
		if(row + 3 < 6 && taken.indexOf((row + 3).toString() + "," + col) === -1){
			cango[cango.length] = (row + 3).toString() + "," + col.toString();
		}
		if(col - 3 > 0 && taken.indexOf(row + "," + (col - 3).toString()) === -1){
			cango[cango.length] = row + "," + (col - 3).toString();
		}
		if(col + 3 < 6 && taken.indexOf(row + "," + (col + 3).toString()) === -1){
			cango[cango.length] = row + "," + (col + 3).toString();
		}
		if(row - 2 > 0 && col - 2 > 0 && taken.indexOf((row - 2).toString() + "," + (col - 2).toString()) === -1){
			cango[cango.length] = (row - 2).toString() + "," + (col - 2).toString();
		}
		if(row + 2 < 6 && col + 2 < 6 && taken.indexOf((row + 2).toString() + "," + (col + 2).toString()) === -1){
			cango[cango.length] = (row + 2).toString() + "," + (col + 2).toString();
		}
		if(row - 2 > 0 && col + 2 < 6 && taken.indexOf((row - 2).toString() + "," + (col + 2).toString()) === -1){
			cango[cango.length] = (row - 2).toString() + "," + (col + 2).toString();
		}
		if(row + 2 < 6 && col - 2 > 0 && taken.indexOf((row + 2).toString() + "," + (col - 2).toString()) === -1){
			cango[cango.length] = (row + 2).toString() + "," + (col - 2).toString();
		}
		if(cango.length === 0){
			$("#modal").modal();
		}else{
			var nowcango;
			for(var i = 0; i < cango.length;i++){
				nowcango = cango[i].split(",");
				nowcango = ".row" + nowcango[0] + ".col" + nowcango[1];
				$(nowcango).addClass("cango");
			}
		}
		return true;
}
