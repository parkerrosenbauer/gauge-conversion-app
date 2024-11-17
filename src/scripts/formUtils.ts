import { $ } from "./domUtils";

export function cloneGaugeTemplate(prefix: string): DocumentFragment {
    const template = $('gauge-form-template') as HTMLTemplateElement;
    if (!template) throw new Error("Gauge form template not found");


    const clone = document.importNode(template.content, true);

    const inputs = clone.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    inputs.forEach(input => {
        input.id = `${prefix}-${input.id}`;
        input.name = `${prefix}-${input.name}`;
    });

    // Update IDs and names for selects
    const selects = clone.querySelectorAll('select') as NodeListOf<HTMLSelectElement>;
    selects.forEach(select => {
        select.id = `${prefix}-${select.id}`;
        select.name = `${prefix}-${select.name}`;
    });

    return clone;
}