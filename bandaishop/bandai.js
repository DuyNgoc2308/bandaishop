var cars = ["imgs/sl1.jpg","imgs/sl2.jpg","imgs/sl31.jpg","imgs/sl32.jpg","imgs/sl41.jpg","imgs/sl42.jpg"];
var position = 1;

setInterval(function(){
	document.getElementById('myImage').src = cars[position];
	position++;
	if(position == cars.length){
		position = 0;
	}
}, 3000);		

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
	ten: "Super sentai SHINKENGER shf ver. standard",
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
	for (var i = 0; i < products.length; i++) {
		var container = document.getElementById("productlist");
		var div1 = document.createElement("div");
		div1.className = "clearfix";
		var div2 = document.createElement("div");
		div2.className = "buttonbox";
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
		order.onclick = function(arg1){
			return function(){
				alert("Added into your cart!");
				if (cart===null) {cart.push(products[arg1]);}else{
				for (var j = 0; j < cart.length; j++) {
					if (cart[j].ten==products[arg1].ten) {
						cart[j].sl++;
						break;

					} 
					if (dem==cart[j].length+1) {
						cart.push(products[arg1]);
						break;
					}
						dem++;
				}}
				
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
	}
}
function displaycart(){
	for (var i = 0; i <cart.length; i++) {
		var container2 = document.getElementById("cartlist");
		var div = document.createElement("div");
		div.className = "gridc";
		var image2 = document.createElement("img");
		var name2 = document.createElement("h5");
		var price2 = document.createElement("h5");
		var remove = document.createElement("button");

		image2.src = cart[i].anh;
		name2.innerHTML = cart[i].ten;
		price2.innerHTML = cart[i].gia;
		remove.innerHTML = "REMOVE";
		remove.onclick = function(arg3){
			return function(){
				cart.splice(arg3,1);
				document.getElementById("cartlist").innerHTML = ' ';	
				displaycart();
				sum();
			}
		}(i)

		div.appendChild(image2);
		div.appendChild(name2);
		div.appendChild(price2);
		div.appendChild(remove);
		container2.appendChild(div);
	}
}
function discart(){
	document.getElementById("giohang").style.display = "block";
	document.getElementById("sanpham").style.display = "none";
	document.getElementById("tratien").style.display = "none";
	document.getElementById("bar").style.display = "none";
	document.getElementById("slshow").style.display = "none";
}
function disproduct(){
	document.getElementById("giohang").style.display = "none";
	document.getElementById("sanpham").style.display = "block";
	document.getElementById("tratien").style.display = "none";
	document.getElementById("bar").style.display = "flex";
	document.getElementById("slshow").style.display = "block ";
}
function dispayment(){
	document.getElementById("giohang").style.display = "none";
	document.getElementById("sanpham").style.display = "none";
	document.getElementById("tratien").style.display = "block";
	document.getElementById("findst").style.display = "none";
	document.getElementById("lands").style.display = "none";
	document.getElementById("slshow").style.display = "none ";
}
		
function sum(){
	var sumof = 0;
	for (var i = 0; i < cart.length; i++) {
		sumof += cart[i].gia;
	}
	document.getElementById("summ").value = sumof;
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
	alert("I haven't done")
}
		// var gundamlist = [];
		// function displaygundam(){
		// 	for (var i = 0; i < products.length; i++) {
		// 		if (products[i].loai === "gd") {
		// 			document.getElementById("productlist").innerHTML = ' ';
		// 			console.log(products[i]);
		// 			gundamlist.push(products[i]);
		// 			for (var j = 0; j < gundamlist.length; j++) {
					
		// 				var containerr = document.getElementById("productlist");
		// 				var div11 = document.createElement("div");
		// 				div11.className = "box";
		// 				var div22 = document.createElement("div");
		// 				div22.className = "buttonbox";
		// 				var name = document.createElement("h4");
		// 				var image = document.createElement("img");
		// 				var price = document.createElement("h4");
		// 				var order = document.createElement("button");
		// 				var detail = document.createElement("button");

		// 				image.src = gundamlist[j].anh;
		// 				name.innerHTML = gundamlist[j].ten;
		// 				price.innerHTML = gundamlist[j].gia;
				
		// 				order.innerHTML = "ORDER";
		// 				order.onclick = function(argg){
		// 					return function(){
		// 						alert("Added into your cart!");
		// 						cart.push(gundamlist[argg]);
		// 						console.log(cart);
		// 						document.getElementById("cartlist").innerHTML = ' ';
		// 						sum();
		// 						displayproducts();
		// 					}
		// 				}(j);
		// 				detail.innerHTML = "DETAIL";

		// 				div11.appendChild(image);
		// 				div11.appendChild(name);
		// 				div11.appendChild(price);
		// 				div22.appendChild(order);
		// 				div22.appendChild(detail);
		// 				div11.appendChild(div22);

		// 				containerr.appendChild(div11);
		// 			}
		// 		}
		// 	}
		// }
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
	if (cart.length == 0) {
		alert("Your cart is empty, please order something.");
		disproduct();
	}
	else{
		// document.getElementById("giohang").innerHTML = ' ';
		// alert("Just some mimutes");
		dispayment();
		var payment = document.getElementById("tratien");
		var div = document.createElement("div");
		div.className = "paymentbox";
		var div2 = document.createElement("div");
		div2.className = "buttonbox";
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
			if (name.innerHTML == ''||phone.innerHTML == ''||street.innerHTML==''||district.innerHTML==''||city.innerHTML==''){
				alert("You forgot something?");
			 
			}else{
				alert("Delivering");
			}
			
		}
		var back = document.createElement("button");
		back.innerHTML = "BACK";
		back.onclick = function(){
			document.getElementById("tratien").innerHTML = ' ';
			disproduct();
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
		div2.appendChild(back);
		div2.appendChild(pay);
		div.appendChild(div2);

		payment.appendChild(div);
	}

}
