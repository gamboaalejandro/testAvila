export function generateRandomPassword(): string {
    let chain = "";
    const length = 8;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < length; i++) {
      const indice = Math.floor(Math.random() * characters.length);
      const character = characters.charAt(indice);
      chain += character;
    }
  
    return chain;
  }