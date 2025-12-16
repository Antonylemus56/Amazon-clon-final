export const carro = [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  }];


export function addTocart(productId){
    let matchingItem;

      carro.forEach((carItem) => {
        if (carItem.productId === productId) {
          
          matchingItem = carItem;
          
        }
      });

      if (matchingItem) {
        matchingItem.quantity++;
      }else{
        carro.push({
          productId: productId,
          quantity: 1
        });
      }
}