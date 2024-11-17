import { cloneGaugeTemplate } from "./formUtils";
import { getResults } from "./eventHandlers";
import { $ } from "./domUtils";

const formContainer = $('gauge-form-container') as HTMLDivElement;

function createGaugeForm(prefix: string, legendText: string): void {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.className = 'gauge-legend';
    legend.textContent = legendText;

    fieldset.appendChild(legend);
    fieldset.appendChild(cloneGaugeTemplate(prefix));
    formContainer.appendChild(fieldset);
}

createGaugeForm('Pattern Gauge', 'pattern');
createGaugeForm('Your Gauge', 'user');

const submitButton = $('button-submit') as HTMLButtonElement;
submitButton.onclick = getResults;