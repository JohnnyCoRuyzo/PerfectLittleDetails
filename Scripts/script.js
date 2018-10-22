var stop = false;
var modal = null;
var cubes3d = null;
var seconds = 0;
var interval = null;

var Details = [
	{ Product: 'B001', Name: 'Esponja para maquillaje', Price: '8.500 COP', Description: 'Con estas esponjas podrás removerte el maquillaje de forma fácil y muy sencilla.' },
	{ Product: 'B002', Name: 'Espejo redondo', Price: '11.000 COP', Description: 'Este espejo te servirá de ayuda para maquillarte, y luego salir reluciente todas los días.' },
	{ Product: 'B003', Name: 'Kit Crema Jabon', Price: '15.000 COP', Description: '.' },
	{ Product: 'B004', Name: 'Cepillo Pedicure', Price: '6.500 COP', Description: '.' },
	{ Product: 'B005', Name: 'Set Cuidado personal', Price: '13.500 COP', Description: '.' },
	{ Product: 'B006', Name: 'Brochas de Maquillaje', Price: '7.500 COP', Description: '.' },
	{ Product: 'B007', Name: 'Mascarilla Facial', Price: '6.000 COP', Description: '.' },
	{ Product: 'B008', Name: 'Acondicionador', Price: '16.000 COP', Description: '.' },
	{ Product: 'B009', Name: 'Cauchos', Price: '700 COP c/u', Description: '.' },
	{ Product: 'C001', Name: 'Recipiente Créme Brûlée', Price: '11.000 COP', Description: '.' },
	{ Product: 'C002', Name: 'Tazón para mezclar', Price: '11.000 COP', Description: '.' },
	{ Product: 'C003', Name: 'Batidor', Price: '11.000 COP', Description: '.' },
	{ Product: 'C004', Name: 'Depositos de Vidrio', Price: '3.500 COP', Description: '.' },
	{ Product: 'C005', Name: 'Colador Métalico', Price: '7.500 COP', Description: '.' },
	{ Product: 'C006', Name: 'Taza medidora', Price: '11.000 COP', Description: '.' },
	{ Product: 'C007', Name: 'Espatula Plana', Price: '9.000 COP', Description: '.' },
	{ Product: 'C008', Name: 'Set Cucharas Medidoras', Price: '6.500 COP', Description: '.' },
	{ Product: 'C010', Name: 'Botella de Vidrio', Price: '6.000 COP', Description: '.' },
	{ Product: 'C011', Name: 'Frasco de Vidrio Redondo', Price: '8.000 COP', Description: '.' },
	{ Product: 'C012', Name: 'Miniespatulas', Price: '9.000 COP', Description: '.' },
	{ Product: 'D001', Name: 'Conejo', Price: '10.000 COP', Description: '.' },
	{ Product: 'D002', Name: 'Lampara', Price: '12.000 COP', Description: '.' },
	{ Product: 'D003', Name: 'Cojin de Corazón', Price: '15.000 COP', Description: '.' },
	{ Product: 'D004', Name: 'Canasto de Basura', Price: '8.500 COP', Description: '.' }];

window.onload = function () {
	//eslint-disable-next-line no-console
	console.log(seconds++);
	modal = document.getElementById('myModalx');
	cubes3d = document.getElementsByClassName('single-rb');
	var pBHidden = Details.filter(obj => obj.Product.indexOf('B') != -1).map(obj => obj.Product);
	var pCHidden = Details.filter(obj => obj.Product.indexOf('C') != -1).map(obj => obj.Product);
	var pDHidden = Details.filter(obj => obj.Product.indexOf('D') != -1).map(obj => obj.Product);
	var change = true;
	interval = setInterval(function () {
		if (!stop) {
			if (change) {
				change = false;

				pBHidden.unshift(pBHidden.pop());
				pBHidden.unshift(pBHidden.pop());
				pBHidden.unshift(pBHidden.pop());
				pBHidden.unshift(pBHidden.pop());
				document.getElementById('B1').src = 'Images/Products/' + pBHidden[0] + ',jpg';
				document.getElementById('B2').src = 'Images/Products/' + pBHidden[1] + ',jpg';

				pCHidden.unshift(pCHidden.pop());
				pCHidden.unshift(pCHidden.pop());
				pCHidden.unshift(pCHidden.pop());
				pCHidden.unshift(pCHidden.pop());
				document.getElementById('C1').src = 'Images/Products/' + pCHidden[0] + ',jpg';
				document.getElementById('C2').src = 'Images/Products/' + pCHidden[1] + ',jpg';

				pDHidden.unshift(pDHidden.pop());
				pDHidden.unshift(pDHidden.pop());
				pDHidden.unshift(pDHidden.pop());
				pDHidden.unshift(pDHidden.pop());
				document.getElementById('D1').src = 'Images/Products/' + pDHidden[0] + ',jpg';
				document.getElementById('D2').src = 'Images/Products/' + pDHidden[1] + ',jpg';
			}
			else {
				change = true;

				document.getElementById('B3').src = 'Images/Products/' + pBHidden[2] + ',jpg';
				document.getElementById('B4').src = 'Images/Products/' + pBHidden[3] + ',jpg';

				document.getElementById('C3').src = 'Images/Products/' + pCHidden[2] + ',jpg';
				document.getElementById('C4').src = 'Images/Products/' + pCHidden[3] + ',jpg';

				document.getElementById('D3').src = 'Images/Products/' + pDHidden[2] + ',jpg';
				document.getElementById('D4').src = 'Images/Products/' + pDHidden[3] + ',jpg';
			}
		}
	}, 10000 + seconds * 1000);
};

//eslint-disable-next-line
function show(str) {
	cubes3d[0].style.webkitAnimationPlayState = 'paused';
	cubes3d[1].style.webkitAnimationPlayState = 'paused';
	cubes3d[2].style.webkitAnimationPlayState = 'paused';
	stop = true;
	var img = document.getElementById(str).src;
	//eslint-disable-next-line no-console
	console.log(img);
	var product = img.split('/')[img.split('/').length - 1].replace('.jpg', '');
	//eslint-disable-next-line no-console
	var element = Details.filter(obj => obj.Product == product)[0];
	document.getElementById('productTitle').innerHTML = element.Product + ' - ' + element.Name;
	document.getElementById('productPrice').innerHTML = element.Price;
	/*document.getElementById('productDescription').innerHTML = element.Description;*/
	document.getElementById('productImg').src = document.getElementById(str).src;
	modal.style.display = 'block';
	seconds = 1;
	clearInterval(interval);
	setInterval(function () {
		if (seconds > 0) seconds++;
	}, 1000);
}

function hide() {
	cubes3d[0].style.webkitAnimationPlayState = 'running';
	cubes3d[1].style.webkitAnimationPlayState = 'running';
	cubes3d[2].style.webkitAnimationPlayState = 'running';
	modal.style.display = 'none';
	stop = false;
}

window.onclick = function (event) {
	if (event.target == modal) {
		hide();
	}
};
