type Criterio = 'greater' | 'lower';

function chooseNumber(num1: number, num2: number, criterio?: Criterio) {
    switch(criterio) {
        case 'greater':
            return num1 > num2 ? num1 : num2 ;
        case 'lower':
            return num1 < num2 ? num1 : num2 ;
        default:
            const numeroAleatorio = Math.random()

            if(numeroAleatorio >= 0.5) {
                return num1;
            }
        
            return num2;
    } 
}

console.log(chooseNumber(2, 5, 'lower'))