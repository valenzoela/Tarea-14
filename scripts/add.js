var classPerro = function(nombre, sexo, raza, colores)
{
	this.nombre = nombre;
	this.sexo = sexo;
	this.raza = raza;
	this.colores = [];
	
	this.write = function()
	{
		document.write("El perro " + this.nombre + " va caminando, ")
		document.write(this.nombre + " guau guau guau, ")
		document.write(this.nombre + ", mugriento," + " juira de aca") 
	}
};

var perro1 = new classPerro("Firulais", "Masculino", "Labrador", "Amarillo");

perro1.write()
