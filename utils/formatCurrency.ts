export function formatCurrency(value: number) {
    // Formata um número para o formato da moeda brasileira
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value);
}