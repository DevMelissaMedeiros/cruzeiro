// main.js — máscaras simples para CPF, CEP e telefone + fallback de validação


function maskCPF(v){
return v.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2')
}
function maskCEP(v){
return v.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2')
}
function maskPhone(v){
v = v.replace(/\D/g,'')
if(v.length > 10) return v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3')
return v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3')
}


documen