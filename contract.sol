pragma solidity ^0.5.16;
contract PropiedadInmobiliaria {
address public propietario;
string public direccion;

event TransferenciaPropiedad(address indexed antiguoPropietario, address indexed nuevoPropietario);

constructor(string memory _direccion) public {
propietario = msg.sender;
direccion = _direccion;
}

function transferirPropiedad(address nuevoPropietario) public {
require(msg.sender == propietario, "Solo el propietario actual puede transferir la propiedad.");
require(nuevoPropietario != address(0), "La dirección del nuevo propietario no puede ser nula.");
propietario = nuevoPropietario;
emit TransferenciaPropiedad(msg.sender, nuevoPropietario);
}
}
