window.onload = function() {
	var cango = ["1,1","1,2","1,3","1,4","1,5",
							 "2,1","2,2","2,3","2,4","2,5",
							 "3,1","3,2","3,3","3,4","3,5",
							 "4,1","4,2","4,3","4,4","4,5",
							 "5,1","5,2","5,3","5,4","5,5"];
	var index = 1;
	var taken = [];
	$(".gridcell").on("click",function() {
		if(this.innerHTML === "" && this.className !== "noclick"){
			//determine click position
			var pos = this.className;
			pos = pos.replace("gridcell ", "");
			pos = pos.replace("row", "");
			pos = pos.replace("col", "");
			pos = pos.split(" ");
			var col = parseInt(pos[0]);
			var row = parseInt(pos[1]);
			if(cango.indexOf(row.toString() + "," + col.toString()) !== -1){
				$(".current").removeClass("current");
				$(".cango").removeClass("cango");
				$(".last").removeClass("last");
				$(this).addClass("last");
				this.innerHTML = index;
				index = index + 1;
				$(this).css("cursor","default");
				$(this).addClass("noclick");
				$(this).addClass("current");
				taken[taken.length] = row + "," + col;
				// Where can it go?
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
					//if game is over, open the modal.
					$("#modal").modal();
				}else{
					//if it is not, highlight all the items in cango array
					var nowcango;
					for(var i = 0; i < cango.length;i++){
						nowcango = cango[i].split(",");
						nowcango = ".row" + nowcango[0] + ".col" + nowcango[1];
						$(nowcango).addClass("cango");
					}
				}
			}
		}
	});
	$("#undo").on("click",function(){
		taken.pop();
		$(".last").text("");
		$(".current").removeClass("current");
		$(".last").removeClass("noclick");
		$(".cango").removeClass("cango");
		pos = taken[taken.length - 1];
		pos = pos.split(",");
		row = pos[0];
		col = pos[1];
		current = $(".row" + row + ".col" + col);
		index = index - 1;
		$(current).css("cursor","default");
		$(current).addClass("noclick");
		$(current).addClass("current");
		cango = [];
		if(parseInt(row) - 3 > 0 && taken.indexOf((parseInt(row) - 3).toString() + "," + parseInt(col)) === -1){
			cango[cango.length] = (parseInt(row) - 3).toString() + "," + parseInt(col).toString();
		}
		if(parseInt(row) + 3 < 6 && taken.indexOf((parseInt(row) + 3).toString() + "," + parseInt(col)) === -1){
			cango[cango.length] = (parseInt(row) + 3).toString() + "," + parseInt(col).toString();
		}
		if(parseInt(col) - 3 > 0 && taken.indexOf(parseInt(row) + "," + (parseInt(col) - 3).toString()) === -1){
			cango[cango.length] = parseInt(row) + "," + (parseInt(col) - 3).toString();
		}
		if(parseInt(col) + 3 < 6 && taken.indexOf(parseInt(row) + "," + (parseInt(col) + 3).toString()) === -1){
			cango[cango.length] = parseInt(row) + "," + (parseInt(col) + 3).toString();
		}
		if(parseInt(row) - 2 > 0 && parseInt(col) - 2 > 0 && taken.indexOf((parseInt(row) - 2).toString() + "," + (parseInt(col) - 2).toString()) === -1){
			cango[cango.length] = (parseInt(row) - 2).toString() + "," + (parseInt(col) - 2).toString();
		}
		if(parseInt(row) + 2 < 6 && parseInt(col) + 2 < 6 && taken.indexOf((parseInt(row) + 2).toString() + "," + (parseInt(col) + 2).toString()) === -1){
			cango[cango.length] = (parseInt(row) + 2).toString() + "," + (parseInt(col) + 2).toString();
		}
		if(parseInt(row) - 2 > 0 && parseInt(col) + 2 < 6 && taken.indexOf((parseInt(row) - 2).toString() + "," + (parseInt(col) + 2).toString()) === -1){
			cango[cango.length] = (parseInt(row) - 2).toString() + "," + (parseInt(col) + 2).toString();
		}
		if(parseInt(row) + 2 < 6 && parseInt(col) - 2 > 0 && taken.indexOf((parseInt(row) + 2).toString() + "," + (parseInt(col) - 2).toString()) === -1){
			cango[cango.length] = (parseInt(row) + 2).toString() + "," + (parseInt(col) - 2).toString();
		}
		if(cango.length === 0){
			/*$("#modal").modal();*/
		}else{
			var nowcango;
			for(var i = 0; i < cango.length;i++){
				nowcango = cango[i].split(",");
				nowcango = ".row" + nowcango[0] + ".col" + nowcango[1];
				$(nowcango).addClass("cango");
			}
		}
	});
	$(".btn").on("click",function(){
		location.reload();
	});
}
