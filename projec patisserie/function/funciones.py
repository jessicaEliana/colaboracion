def suma(num1, num2):
    resultado=num1+num2
    return resultado

def resta(num1,num2):
    resultado=num1-num2
    return resultado


if __name__=="__main__":
    print("Hola, esta esta es un apicacion para sumar:")
    print("Ingrese primer valor:")
    num1=float(input())
    print("Ingrese segundo valor:")
    num2=float(input())
    resultado=num1+num2
    print("El resultado es:",resultado)
