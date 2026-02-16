function toCamelCase(text) {
    return text
        .split(/[\s_-]+/)
        .map((word, index) => {
            if (index === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage
console.log(toCamelCase('coffeecup'));        // coffeecup
console.log(toCamelCase('coffee cup'));       // coffeeCup
console.log(toCamelCase('coffee-cup'));       // coffeeCup
console.log(toCamelCase('coffee_cup'));       // coffeeCup