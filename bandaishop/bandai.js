		

var prod1 = {
	anh: "imgs/gundam1.jpg",
	ten: "GUNDAM ver. standard collection",
	gia: 1500000,
	loai: "gd",
	chitiet: "Two types of head blade antennas are included for each of the destroy mode and unicorn mode.",
	sl:1
}
var prod2 = {
	anh: "imgs/gundam2.jpg",
	ten: "GUNDAM gold ver 2.0.0 limited",
	gia: 1500000,
	loai: "gd",
	chitiet: "Two types of head blade antennas are included for each of the destroy mode and unicorn mode.",
	sl:1
}
var prod3 = {
	anh: "imgs/gundam3.jpg",
	ten: "GUNDAM ver. standard builder",
	gia: 1500000,
	loai: "gd",
	chitiet: "Two types of head blade antennas are included for each of the destroy mode and unicorn mode.",
	sl:1
}
var prod4 = {
	anh: "imgs/km1.jpg",
	ten: "Kamen rider WIZARD shf",
	gia: 1500000,
	loai: "km",
	chitiet: "Two types of head blade antennas are included for each of the destroy mode and unicorn mode.",
	sl:1
}
var prod5 = {
	anh: "imgs/km2.jpeg",
	ten: "Kamen rider OOO shf ver. standard",
	gia: 1500000,
	loai: "km",
	chitiet: "Two types of head blade antennas are included for each of the destroy mode and unicorn mode.",
	sl:1
}
var prod6 = {
	anh: "imgs/km2.jpg",
	ten: "Kamen rider DECADE shf ver. standard",
	gia: 1500000,
	loai: "km",
	chitiet: "Two types of head blade antennas are included for each of the destroy mode and unicorn mode.",
	sl:1
}
var prod7 = {
	anh: "imgs/km4.jpg",
	ten: "Kamen rider DEEND shf ver. standard",
	gia: 1500000,
	loai: "km",
	chitiet: "Two types of head blade antennas are included for each of the destroy mode and unicorn mode.",
	sl:1
}
var prod8 = {
	anh: "imgs/sp1.jpg",
	ten: "Shikenger BLUE shf ver. standard",
	gia: 1500000,
	loai: "sp",
	chitiet: "Two types of head blade antennas are included for each of the destroy mode and unicorn mode.",
	sl:1
}
var prod9 = {
	anh: "imgs/sp2.jpg",
	ten: "Gokaiger RED shf ver. standard",
	gia: 1500000,
	loai: "sp",
	chitiet: "Two types of head blade antennas are included for each of the destroy mode and unicorn mode.",
	sl:1
}
var prod10 = {
	anh: "imgs/sp3.jpg",
	ten: "SHINKENGER shf ver. collection 6",
	gia: 1500000,
	loai: "sp",
	chitiet: "Two types of head blade antennas are included for each of the destroy mode and unicorn mode.",
	sl:1
}

var products = [prod1,prod2,prod3,prod4,prod5,prod6,prod7,prod8,prod9,prod10];
console.log(products);
displayproducts();
var cart = [];
function displayproducts(){
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
				// alert("Added into your cart!");
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
		detail.onclick = function(arg){
			return function(){
				alert("I am going to move to the next page");
				// document.getElementById("productlist").innerHTML = ' ';
				// viewdetail();
			}
		}(i);
		div1.appendChild(image);
		div1.appendChild(name);
		div1.appendChild(price);
		div2.appendChild(order);
		div2.appendChild(detail);
		div1.appendChild(div2);

		container.appendChild(div1);
	}
}

function displaycart(){
	document.getElementById("giohang").style.display = "block";
	document.getElementById("sanpham").style.display = "none";
	document.getElementById("tratien").style.display = "none";
	document.getElementById("bar").style.display = "none";
	document.getElementById("slshow").style.display = "none";
	document.getElementById("category").style.display = "flex";
	for (var i = 0; i <cart.length; i++) {
		container2 = document.getElementById("cartlist");
		var div1 = document.createElement("div");
		div1.className = "gridc";
		var div2 = document.createElement("div");
		div2.className = "quantity";
		var div3 = document.createElement("div");
		div3.className = "updownstyle";
		var image2 = document.createElement("img");
		var name2 = document.createElement("h5");
		var price2 = document.createElement("h5");
		var quantity2 = document.createElement("input");
		var up = document.createElement("button");
		up.className = "fas fa-sort-up";
		up.onclick = function(arg2){
			return function(){
				cart[arg2].sl ++;
				document.getElementById("cartlist").innerHTML = ' ';	
				displaycart();
				sum();
			}
		}(i);
		var down = document.createElement("button");
		down.className = "fas fa-sort-down";
		down.onclick = function(arg3){
			return function(){
				cart[arg3].sl --;
				if (cart[arg3].sl == 0) {
					cart.splice(arg3,1);
				}
				document.getElementById("cartlist").innerHTML = ' ';	
				displaycart();
				sum();
			}
		}(i);
		var remove = document.createElement("button");

		image2.src = cart[i].anh;
		name2.innerHTML = cart[i].ten;
		price2.innerHTML = cart[i].gia;
		quantity2.value = cart[i].sl;
		remove.innerHTML = "REMOVE";
		remove.onclick = function(arg4){
			return function(){
				cart.splice(arg4,1);
				document.getElementById("cartlist").innerHTML = ' ';	
				displaycart();
				sum();
			}
		}(i)

		div1.appendChild(image2);
		div1.appendChild(name2);
		div1.appendChild(price2);
		div2.appendChild(quantity2);
		div3.appendChild(up);
		div3.appendChild(down);
		div2.appendChild(div3);
		div1.appendChild(div2);
		div1.appendChild(remove);
		container2.appendChild(div1);
	}
}
	
function sum(){
	var sumof = 0;
	for (var i = 0; i < cart.length; i++) {
		sumof += cart[i].gia * cart[i].sl;
	}
	document.getElementById("summ").value = sumof;
	document.getElementById("tongtien").value = sumof;
}
		
function applydiscount(){
	var sumof = 0;
	var diss = 0;
	var total = 0;
	var code = document.getElementById("discount").value;
	for (var i = 0; i < cart.length; i++) {
		if (code === "IUSHOP") {
			sumof += cart[i].gia;
			diss = sumof * 0.1;
			total = sumof - diss;
			document.getElementById("discount").style.color = "red";
			document.getElementById("summ").value = ' ';
			document.getElementById("summ").value = total;
		}else{
			alert("Something went wrong?");
			document.getElementById("discount").value = '';
		}
	}
			
}
		
function search(){
	document.getElementById("productlist").innerHTML = ' ';
	var find = document.getElementById("insp").value.toLowerCase();
	for (var i = 0; i < products.length; i++) {
		if (find === products[i].ten.toLowerCase()) {
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
			price.innerHTML = products[i].gia;
			
			order.innerHTML = "ORDER";
			var dem = 0;
			order.onclick = function(arg5){
				return function(){
					alert("Added into your cart!");
					var iname = products[arg5].ten;
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
	                    	anh: products[arg5].anh,
	                        ten: products[arg5].ten,
	                        gia: products[arg5].gia,
	                        sl: 1
	                    });
	                }
	                console.log(cart);
					document.getElementById("cartlist").innerHTML = ' ';
					sum();
					displaycart();
	            }
	        }(i);
			detail.innerHTML = "DETAIL";
			detail.onclick = function(arg){
				return function(){
					alert("I am going to move to the next page");
					document.getElementById("productlist").innerHTML = ' ';
					viewdetail();
				}
			}(i);
			div1.appendChild(image);
			div1.appendChild(name);
			div1.appendChild(price);
			div2.appendChild(order);
			div2.appendChild(detail);
			div1.appendChild(div2);


			container.appendChild(div1);

			var backbutton = document.createElement("button");
			backbutton.innerHTML = "BACK";
			backbutton.onclick = function(){
				document.getElementById("productlist").innerHTML = ' ';
				displayproducts();
			}
			var butbox = document.getElementById("productlist");
			butbox.appendChild(backbutton);
		}
	}
}
var gundamlist = [];
var kamenlist = [];
var sentailist = [];

function displaygundam(){
	for (var i = 0; i < products.length; i++) {
		if (products[i].loai === "gd") {
			
			console.log(products[i]);
			gundamlist.push(products[i]);
		}
	}
	products=gundamlist;
	document.getElementById("productlist").innerHTML = ' ';
	displayproducts();
}
function displaykamen(){
	for (var i = 0; i < products.length; i++) {
		if (products[i].loai === "km") {
			
			console.log(products[i]);
			kamenlist.push(products[i]);
		}
	}
	products=kamenlist;
	document.getElementById("productlist").innerHTML = ' ';
	displayproducts();
}
function displaysentai(){
	for (var i = 0; i < products.length; i++) {
		if (products[i].loai === "sp") {
			
			console.log(products[i]);
			sentailist.push(products[i]);
		}
	}
	products=sentailist;
	document.getElementById("productlist").innerHTML = ' ';
	displayproducts();
}
// function viewdetail(){
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
// 			displayproducts();
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
function buynow(){
	document.getElementById("category").style.display = "none";
	document.getElementById("giohang").style.display = "none";
	document.getElementById("sanpham").style.display = "none";
	document.getElementById("tratien").style.display = "block";
	document.getElementById("bar").style.display = "none";;
	document.getElementById("slshow").style.display = "none ";
	if (cart.length == 0) {
		alert("Your cart is empty, please order something.");
		displayproducts();
	}
	else{
		// document.getElementById("giohang").innerHTML = ' ';
		// alert("Just some mimutes");
		var payment = document.getElementById("tratiendiv");
		var div = document.createElement("div");
		div.className = "paymentbox";
		var lname = document.createElement("label");
		lname.innerHTML = "Your full name:";
		var name = document.createElement("input");
		var lphone = document.createElement("label");
		lphone.innerHTML = "Your phone number:";
		var phone = document.createElement("input");
		var lstreet = document.createElement("label");
		lstreet.innerHTML = "Your street:";
		var street = document.createElement("input");
		var ldistrict = document.createElement("label");
		ldistrict.innerHTML = "Your district:";
		var district = document.createElement("input");
		var lcity = document.createElement("label");
		lcity.innerHTML = "Your city:";
		var city = document.createElement("input");
		var pay = document.createElement("button");
		pay.innerHTML = "CONFIRM";
		
		pay.onclick = function(){
			if (name.value == ''||phone.value == ''||street.value==''||district.value==''||city.value==''){
				alert("You forgot something?");
			}else{
				alert(name.value+" your order will be delivered for the next 3-4 days.");
				displayproducts();
			}
		}
		var back = document.createElement("button");
		back.innerHTML = "BACK";
		back.onclick = function(){
			document.getElementById("tratien").innerHTML = ' ';
			document.getElementById("productlist").innerHTML = ' ';
			document.getElementById("cartlist").innerHTML = ' ';
			displaycart();
		}

		div.appendChild(lname);
		div.appendChild(name);
		div.appendChild(lphone);
		div.appendChild(phone);
		div.appendChild(lstreet);
		div.appendChild(street);
		div.appendChild(ldistrict);
		div.appendChild(district);
		div.appendChild(lcity);
		div.appendChild(city);
		
		for (var i = 0; i < cart.length; i++) {
			var containerpm = document.getElementById("ghthanhtoan");
			var div1 = document.createElement("div");
			div1.className = "gridd";
			var image = document.createElement("img");
			var name = document.createElement("h5");
			var price = document.createElement("h5");
			var quantity = document.createElement("h5");

			image.src = cart[i].anh;
			name.innerHTML = cart[i].ten;
			price.innerHTML = cart[i].gia;
			quantity.innerHTML = cart[i].sl;
			
			div1.appendChild(image);
			div1.appendChild(name);
			div1.appendChild(price);
			div1.appendChild(quantity);
			containerpm.appendChild(div1);
		}

		payment.appendChild(div);
		var butbox = document.getElementById("bandp");
		butbox.className = "flexbox";
		butbox.appendChild(back);
		butbox.appendChild(pay);


	}

}
