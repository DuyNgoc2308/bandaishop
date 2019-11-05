function displaycart(){
	document.getElementById("cartlist").innerHTML = ' '
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

function buynow(){
	document.getElementById("category").style.display = "none";
	document.getElementById("giohang").style.display = "none";
	document.getElementById("sanpham").style.display = "none";
	document.getElementById("tratien").style.display = "block";
	document.getElementById("bar").style.display = "none";;
	document.getElementById("slshow").style.display = "none ";
	if (cart.length == 0) {
		alert("Your cart is empty, please order something.");
		displayproducts(products);
	}
	else{
		// document.getElementById("giohang").innerHTML = ' ';
		// alert("Just some mimutes");
		var payment = document.getElementById("tratiendiv");
		var div = document.createElement("div");
		div.className = "paymentbox";
		var lname = document.createElement("label");
		lname.innerHTML = "Your full name:";
		var ipname = document.createElement("input");
		var lphone = document.createElement("label");
		lphone.innerHTML = "Your phone number:";
		var phone = document.createElement("input");
		var laddress = document.createElement("label");
		laddress.innerHTML = "Your receiving address:";
		var address = document.createElement("input");
		var pay = document.createElement("button");
		pay.innerHTML = "CONFIRM";
		
		pay.onclick = function(){
			if (ipname.value == ''||phone.value == ''||address.value==''){
				alert("You forgot something?");
			}else{
				alert(ipname.value+" your order will be delivered for the next 3-4 days.");
				displayproducts(products);
			}
		}
		var back = document.createElement("button");
		back.className = "fas fa-arrow-left";
		back.innerHTML = "BACK";
		back.onclick = function(){
			document.getElementById("tratien").innerHTML = ' ';
			document.getElementById("productlist").innerHTML = ' ';
			document.getElementById("cartlist").innerHTML = ' ';
			displaycart();
		}

		div.appendChild(lname);
		div.appendChild(ipname);
		div.appendChild(lphone);
		div.appendChild(phone);
		div.appendChild(laddress);
		div.appendChild(address);
		
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
			document.getElementById("tongtien").value = total;
		}else{
			alert("Something went wrong?");
			document.getElementById("discount").value = '';
		}
	}		
}