function calcular(){
				var operacao = document.getElementById('operacao').value;
				var num1= document.getElementById('num1').value;
				var num2= document.getElementById('num2').value;
				num1=parseFloat(num1);
				num2=parseFloat(num2);
				if (num1==''|| num1==null) {
					alert('Favor digitar um numero valido:');
					return false;
				}
				if (num2==''|| num2==null) {
					alert('Favor digitar um numero valido:');
					return false;
				}
				var resultado=null;
				switch(operacao){
					case'1': //subtração
						resultado=num1 -num2;
						break;
					case'2': //adição
						resultado=num1+num2;
						break;
					case'3': //multiplicação
						resultado=num1*num2;
						break;
					case'4': //divisão
						resultado=num1/num2;
						break;
					default:
					alert('A opção selecionada e invalida:')
					return false;
				}

				document.getElementById('resultado').value=resultado;
			}
			function limpar(){
				document.getElementById('num1').value=''
				document.getElementById('num2').value=''
				document.getElementById('resultado').value=''
			}
