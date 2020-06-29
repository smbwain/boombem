
export default function (block: string) {
    return (element?: string, modifiers?: Record<string, any>, additional?: string) => {
        const main = element ? `${block}__${element}` : block;
        const list = [main];
        if (modifiers) {
            for (let modifier in modifiers) {
                if (modifiers.hasOwnProperty(modifier) && modifiers[modifier]) {
                    list.push(`${main}--${modifier}`)
                }
            }
        }
        if (additional) {
            list.push(additional);
        }
        return list.join(' ');
    };
}
