
export default function (block: string) {
    return (element?: string, modifiers?: Record<string, any>) => {
        const main = element ? `${block}__${element}` : block;
        if (!modifiers) {
            return main;
        }
        const list = [main];
        for (let modifier in modifiers) {
            if (modifiers.hasOwnProperty(modifier) && modifiers[modifier]) {
                list.push(`${main}--${modifier}`)
            }
        }
        return list.join(' ');
    };
}
