let form = document.getElementById("form-contato");

if (form.addEventListener) {                   
    form.addEventListener("submit", validaCadastro);
} else if (form.attachEvent) {                  
    form.attachEvent("onsubmit", validaCadastro);
}

function validaCadastro(evt){
	let nome = document.getElementById('nome');
	let email = document.getElementById('email');
    let telefone= document.getElementById('telefone');
    let endereco = document.getElementById('endereco');
	let filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    let filtro2 = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    let filtro3 = new RegExp(/[^0-9]/gi,"");

	let contErro = 0;


	/* Validação do campo nome */
	caixa_nome = document.querySelector('.msg-nome');
	if(nome.value == ""){
		caixa_nome.innerHTML = "Favor preencher o Nome";
		caixa_nome.style.display = 'block';
		contErro += 1;
	}else{
		caixa_nome.style.display = 'none';
	}

	/* Validação do campo email */
	caixa_email = document.querySelector('.msg-email');
	if(email.value == ""){
		caixa_email.innerHTML = "Favor preencher o E-mail";
		caixa_email.style.display = 'block';
		contErro += 1;
	}else if(filtro.test(email.value)){
		caixa_email.style.display = 'none';
	}else{
		caixa_email.innerHTML = "Formato do E-mail inválido";
		caixa_email.style.display = 'block';
		contErro += 1;
	}	
     
   

    /* Validação do campo telefone  */
    caixa_telefone = document.querySelector('.msg-telefone');
    if(telefone.value ==""){
        caixa_telefone.innerHTML = "Favor preencher o telefone";
        caixa_telefone.style.display = 'block';
        contErro +=1;

    } else if (!filtro2.test(telefone.value)){
        caixa_telefone.style.display = 'none';
    }else{
        caixa_telefone.innerHTML = "Formato de telefone inválido";
        caixa_telefone.style.display = 'block';
        contErro +=1;

    }
     
   

	if(contErro > 0){
		evt.preventDefault();
	}
}