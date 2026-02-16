function toKebabCase(str) {
    // Step 1: Split into words (handle camelCase, spaces, underscores)
    const words = str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to spaces
        .replace(/[_\s]+/g, ' ') // underscores and spaces to spaces
        .trim()
        .split(' ')
        .filter(word => word.length > 0);

    // Step 2: Capitalize first and last character of each word
    const capitalized = words.map(word => {
        if (word.length === 1) return word.toUpperCase();
        return word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
    });

    // Step 3: Join with dashes
    return capitalized.join('-').toLowerCase();
}

module.exports = toKebabCase;