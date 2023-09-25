const useCamelize = (str) => {
    if(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '');
    }
}

export default useCamelize;