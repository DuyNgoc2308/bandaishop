var products = [];

console.log(items);
displayproducts(items);
var cart = [];
products = items;

function displayproducts(products){
	document.getElementById("productlist").innerHTML = ' ';
	document.getElementById("giohang").style.display = "none";
	document.getElementById("sanpham").style.display = "block";
	document.getElementById("tratien").style.display = "none";
	document.getElementById("bar").style.display = "flex";
	document.getElementById("slshow").style.display = "block ";
	document.getElementById("category").style.display = "flex";
	for (var i = 0; i < products.length; i++) {
		var container = document.getElementById("productlist");
		var div1 = document.createElement("div");
		div1.className = "clearfix";
		var div2 = document.createElement("div");
		div2.className = "flexbox";
		var name = document.createElement("h4");
		var image = document.createElement("img");
		var price = document.createElement("h4");
		var order = document.createElement("button");
		var detail = document.createElement("button");

		image.src = products[i].anh;
		name.innerHTML = products[i].ten;
		price.innerHTML = products[i].gia+"VND";
		
		order.innerHTML = "ORDER";
		order.onclick = function(arg1){
			return function(){
				alert("Added into your cart!");
				var iname = products[arg1].ten;
                var itontai = -1;
                for (var k = 0; k < cart.length; k++) {
                    if (cart[k].ten == iname) {
                        itontai = k;
                    }
                }
                if (itontai != -1) {
                    cart[itontai].sl += 1;
                } else {
                    cart.push({
                    	anh: products[arg1].anh,
                        ten: products[arg1].ten,
                        gia: products[arg1].gia,
                        sl: 1
                    });
                }
                console.log(cart);
				document.getElementById("cartlist").innerHTML = ' ';
				sum();
            }
        }(i);
		detail.innerHTML = "DETAIL";
		// detail.onclick = function(arg){
		// 	return function(){
		// 		alert("I am going to move to the next page");
		// 		viewdetail(products);
		// 	}
		// }(i);
		div1.appendChild(image);
		div1.appendChild(name);
		div1.appendChild(price);
		div2.appendChild(order);
		div2.appendChild(detail);
		div1.appendChild(div2);

		container.appendChild(div1);
	}
}
var gundamlist = [];
var kamenlist = [];
var sentailist = [];

function displaygundam(){
	for (var i = 0; i < products.length; i++) {
		if (products[i].loai === "gd") {
			gundamlist.push({
                    	anh: products[i].anh,
                        ten: products[i].ten,
                        gia: products[i].gia,
                        sl: 1
                    });
		}
	}
	console.log(gundamlist);
	products=gundamlist;
	document.getElementById("productlist").innerHTML = ' ';
	displayproducts(products);
	gundamlist = [];
	products = items;
}

function displaykamen(){
	for (var i = 0; i < products.length; i++) {
		if (products[i].loai === "km") {
			kamenlist.push({
                    	anh: products[i].anh,
                        ten: products[i].ten,
                        gia: products[i].gia,
                        sl: 1
                    });
		}
	}
	console.log(kamenlist);
	document.getElementById("productlist").innerHTML = ' ';
	products=kamenlist;
	displayproducts(products);
	kamenlist = [];
	products = items;

}

function displaysentai(){
	for (var i = 0; i < products.length; i++) {
		if (products[i].loai === "sp") {
			sentailist.push({
                    	anh: products[i].anh,
                        ten: products[i].ten,
                        gia: products[i].gia,
                        sl: 1
                    });
		}
	}
	console.log(sentailist);
	products=sentailist;
	document.getElementById("productlist").innerHTML = ' ';
	displayproducts(products);
	sentailist = [];
	products = items;
}

// function viewdetail(products){
// 	for (var i = 0; i < products.length; i++) {
// 		var detailbox = document.getElementById("productlist");
// 		var div = document.createElement("div");
// 		var name = document.createElement("h4");
// 		var image = document.createElement("img");
// 		var price = document.createElement("h4");
// 		var moreinfo = document.createElement("h4");
// 		var back = document.createElement("button");
				
// 		image.src = products[i].anh;
// 		name.innerHTML = products[i].ten;
// 		price.innerHTML =products[i].gia+ " VND";
// 		moreinfo.innerHTML ="More: " +products[i].chitiet;
// 		back.innerHTML = "BACK";
// 		back.onclick = function(){
// 			document.getElementById("productlist").innerHTML = ' ';
// 			displayproducts(products);
// 		}

// 		div.appendChild(image);
// 		div.appendChild(name);
// 		div.appendChild(price);
// 		div.appendChild(moreinfo);
// 		div.appendChild(back);
// 		detailbox.appendChild(div);
// 	}
// }

function signin(){
	alert("I haven't done");
}

function signup(){
	alert("I haven't done");
}

function search() {
   var find = document.getElementById("insp").value.toLowerCase();
   displaysearch(find);
}
function displaysearch(arg) {
   var searchResults = [];
   for (var i = 0; i < products.length; i++) {
       var nameItems = products[i].ten;
       var nameItems = nameItems.toLowerCase();
       var codeCompare = nameItems.indexOf(arg);
       if (codeCompare != -1) {
           searchResults.push(products[i]);
       }
   }
   if (searchResults.length != 0) {
       document.getElementById("productlist").innerHTML = ' ';
       displayproducts(searchResults);
       var backbut = document.createElement("button");
       backbut.className = "fas fa-arrow-left";
       backbut.innerHTML = "BACK ";
       backbut.onclick = function(){
			document.getElementById("tratien").innerHTML = ' ';
			document.getElementById("productlist").innerHTML = ' ';
			document.getElementById("cartlist").innerHTML = ' ';
			displayproducts(products);
		}
		document.getElementById("productlist").appendChild(backbut);
   } else {
       alert("There is nothing like this");
   }
}
